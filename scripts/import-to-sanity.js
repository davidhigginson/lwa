#!/usr/bin/env node

/**
 * Import existing JSON content into Sanity CMS
 * 
 * Usage: node scripts/import-to-sanity.js
 * 
 * Make sure you have NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN set
 * Get your API token from: https://sanity.io/manage -> Your Project -> API -> Tokens
 */

const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local')
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8')
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/)
    if (match) {
      const key = match[1].trim()
      const value = match[2].trim().replace(/^["']|["']$/g, '')
      if (!process.env[key]) {
        process.env[key] = value
      }
    }
  })
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId) {
  console.error('❌ NEXT_PUBLIC_SANITY_PROJECT_ID not found in environment variables')
  console.error('   Add it to .env.local or set it as an environment variable')
  process.exit(1)
}

if (!token) {
  console.error('❌ SANITY_API_TOKEN not found')
  console.error('   Get your token from: https://sanity.io/manage -> Your Project -> API -> Tokens')
  console.error('   Create a token with "Editor" permissions')
  console.error('   Add it to .env.local as: SANITY_API_TOKEN=your-token-here')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// Helper to clean text (remove emojis and placeholders)
function cleanText(text) {
  if (typeof text !== 'string') return text
  
  // Remove 🔴 emoji
  let cleaned = text.replace(/🔴\s*/g, '')
  
  // Remove placeholder patterns
  cleaned = cleaned.replace(/\[.*?NEEDED.*?\]/gi, '')
  cleaned = cleaned.replace(/\[.*?verify.*?\]/gi, '')
  cleaned = cleaned.replace(/\[.*?add.*?\]/gi, '')
  
  return cleaned.trim()
}

// Recursively clean object
function cleanObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return typeof obj === 'string' ? cleanText(obj) : obj
  }
  
  if (Array.isArray(obj)) {
    return obj.map(cleanObject)
  }
  
  const cleaned = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      cleaned[key] = cleanText(value)
    } else if (Array.isArray(value)) {
      cleaned[key] = value.map(cleanObject)
    } else if (typeof value === 'object' && value !== null && !value._type && !value._ref) {
      // Don't clean Sanity references
      cleaned[key] = cleanObject(value)
    } else {
      cleaned[key] = value
    }
  }
  return cleaned
}

// Helper to create or update document
async function createOrUpdateDocument(type, data, idField = '_id') {
  try {
    // Clean the data before importing
    const cleanedData = cleanObject(data)
    
    const existing = await client.fetch(`*[_type == $type && ${idField} == $id][0]`, {
      type,
      id: cleanedData[idField] || cleanedData.id,
    })

    if (existing) {
      console.log(`  ✓ Updating existing ${type}: ${cleanedData[idField] || cleanedData.id}`)
      return await client
        .patch(existing._id)
        .set(cleanedData)
        .commit()
    } else {
      console.log(`  ✓ Creating new ${type}: ${cleanedData[idField] || cleanedData.id}`)
      return await client.create({
        _type: type,
        ...cleanedData,
      })
    }
  } catch (error) {
    console.error(`  ✗ Error with ${type} ${data[idField] || data.id}:`, error.message)
    throw error
  }
}

async function importContent() {
  console.log('🚀 Starting content import to Sanity...\n')
  console.log(`Project ID: ${projectId}`)
  console.log(`Dataset: ${dataset}\n`)

  try {
    // 1. Import Site Configuration
    console.log('📄 Importing Site Configuration...')
    const siteData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'site.json'), 'utf8')
    )
    
    await createOrUpdateDocument('site', {
      _id: 'site-config',
      ...siteData,
    })
    console.log('  ✓ Site configuration imported\n')

    // 2. Import Project Categories
    console.log('📁 Importing Project Categories...')
    const projectsData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'projects.json'), 'utf8')
    )

    const categoryMap = {}
    for (const category of projectsData.categories) {
      const doc = await createOrUpdateDocument('projectCategory', {
        id: category.id,
        name: category.name,
        description: category.description,
      })
      categoryMap[category.id] = { _ref: doc._id, _type: 'projectCategory' }
    }
    console.log(`  ✓ ${projectsData.categories.length} categories imported\n`)

    // 3. Import Projects
    console.log('📋 Importing Projects...')
    let successCount = 0
    let errorCount = 0

    for (const project of projectsData.projects) {
      try {
        // Build full image URL
        const imageUrl = project.image.startsWith('http') 
          ? project.image 
          : `https://lwa-delta.vercel.app${project.image}`
        
        // Try to upload image to Sanity
        let imageAsset = null
        try {
          const response = await fetch(imageUrl)
          if (response.ok) {
            const buffer = Buffer.from(await response.arrayBuffer())
            const filename = project.image.split('/').pop() || `${project.id}.jpg`
            
            imageAsset = await client.assets.upload('image', buffer, {
              filename: filename,
              contentType: response.headers.get('content-type') || 'image/jpeg',
            })
            console.log(`    ✓ Uploaded image for ${project.id}`)
          }
        } catch (imgError) {
          console.log(`    ⚠ Could not upload image for ${project.id}: ${imgError.message}`)
          console.log(`      Image URL: ${imageUrl}`)
          console.log(`      You can upload this image manually in Sanity Studio`)
        }

        const categoryRef = categoryMap[project.category]
        if (!categoryRef) {
          console.error(`    ⚠ Category "${project.category}" not found for project ${project.id}`)
        }

        const projectData = {
          id: project.id,
          title: project.title,
          location: project.location,
          country: project.country,
          region: project.region,
          category: categoryRef || categoryMap[Object.keys(categoryMap)[0]],
          summary: project.summary,
          description: project.description,
          impact: project.impact || '',
          featured: project.featured || false,
          sourceVerified: project.sourceVerified || false,
        }

        // Add image if uploaded successfully
        if (imageAsset && imageAsset._id) {
          projectData.image = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id,
            },
          }
        }

        await createOrUpdateDocument('project', projectData, 'id')
        successCount++
      } catch (error) {
        console.error(`  ✗ Failed to import project ${project.id}:`, error.message)
        errorCount++
      }
    }
    console.log(`  ✓ ${successCount} projects imported`)
    if (errorCount > 0) {
      console.log(`  ⚠ ${errorCount} projects failed\n`)
    } else {
      console.log('')
    }

    // 4. Import About Page Content
    console.log('📖 Importing About Page Content...')
    const aboutData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'about.json'), 'utf8')
    )

    // Handle image for St. Therese section
    let stThereseImageAsset = null
    if (aboutData.stTherese?.image) {
      try {
        const imageUrl = aboutData.stTherese.image.startsWith('http')
          ? aboutData.stTherese.image
          : `https://lwa-delta.vercel.app${aboutData.stTherese.image}`
        
        const response = await fetch(imageUrl)
        if (response.ok) {
          const buffer = Buffer.from(await response.arrayBuffer())
          stThereseImageAsset = await client.assets.upload('image', buffer, {
            filename: aboutData.stTherese.image.split('/').pop() || 'st-therese.jpg',
            contentType: response.headers.get('content-type') || 'image/jpeg',
          })
          console.log('    ✓ Uploaded St. Therese image')
        }
      } catch (imgError) {
        console.log(`    ⚠ Could not upload St. Therese image: ${imgError.message}`)
        console.log('      You can upload this image manually in Sanity Studio')
      }
    }

    const aboutDoc = {
      _id: 'about-page',
      ...aboutData,
    }

    if (stThereseImageAsset && stThereseImageAsset._id) {
      aboutDoc.stTherese = {
        ...aboutData.stTherese,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: stThereseImageAsset._id,
          },
        },
      }
    }

    await createOrUpdateDocument('about', aboutDoc)
    console.log('  ✓ About page content imported\n')

    console.log('✅ Content import completed successfully!')
    console.log('\n📝 Next steps:')
    console.log('1. Go to https://yourdomain.com/studio')
    console.log('2. Upload images for projects and St. Therese section')
    console.log('3. Update image references in the documents')
    console.log('4. Review and verify all imported content')

  } catch (error) {
    console.error('\n❌ Import failed:', error.message)
    console.error(error)
    process.exit(1)
  }
}

importContent()
