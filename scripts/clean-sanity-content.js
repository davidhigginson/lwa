#!/usr/bin/env node

/**
 * Clean 🔴 emojis and placeholder text from Sanity content
 * 
 * Usage: node scripts/clean-sanity-content.js
 */

const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Load environment variables
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

if (!projectId || !token) {
  console.error('❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// Helper to remove emojis and clean text
function cleanText(text) {
  if (typeof text !== 'string') return text
  
  // Remove 🔴 emoji
  let cleaned = text.replace(/🔴\s*/g, '')
  
  // Remove placeholder patterns like "[EMAIL NEEDED - ...]"
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
    } else if (typeof value === 'object' && value !== null) {
      cleaned[key] = cleanObject(value)
    } else {
      cleaned[key] = value
    }
  }
  return cleaned
}

async function cleanContent() {
  console.log('🧹 Cleaning 🔴 emojis and placeholders from Sanity content...\n')

  try {
    // 1. Clean Site Configuration
    console.log('📄 Cleaning Site Configuration...')
    const site = await client.fetch('*[_type == "site"][0]')
    if (site) {
      const cleaned = cleanObject(site)
      await client
        .patch(site._id)
        .set(cleaned)
        .commit()
      console.log('  ✓ Site configuration cleaned\n')
    }

    // 2. Clean About Page
    console.log('📖 Cleaning About Page Content...')
    const about = await client.fetch('*[_type == "about"][0]')
    if (about) {
      const cleaned = cleanObject(about)
      await client
        .patch(about._id)
        .set(cleaned)
        .commit()
      console.log('  ✓ About page content cleaned\n')
    }

    // 3. Clean Projects (titles and descriptions)
    console.log('📋 Cleaning Projects...')
    const projects = await client.fetch('*[_type == "project"]')
    let cleanedCount = 0
    
    for (const project of projects) {
      const cleaned = cleanObject(project)
      const hasChanges = JSON.stringify(project) !== JSON.stringify(cleaned)
      
      if (hasChanges) {
        await client
          .patch(project._id)
          .set(cleaned)
          .commit()
        cleanedCount++
      }
    }
    console.log(`  ✓ ${cleanedCount} projects cleaned\n`)

    console.log('✅ Content cleaning completed!')
    console.log('\nAll 🔴 emojis and placeholder text have been removed from Sanity.')

  } catch (error) {
    console.error('\n❌ Cleaning failed:', error.message)
    console.error(error)
    process.exit(1)
  }
}

cleanContent()
