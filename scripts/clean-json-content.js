#!/usr/bin/env node

/**
 * Clean 🔴 emojis and placeholder text from JSON content files
 * This matches what was cleaned in Sanity
 */

const fs = require('fs')
const path = require('path')

// Helper to clean text
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
    } else if (typeof value === 'object' && value !== null) {
      cleaned[key] = cleanObject(value)
    } else {
      cleaned[key] = value
    }
  }
  return cleaned
}

function cleanJsonFile(filePath) {
  console.log(`📄 Cleaning ${path.basename(filePath)}...`)
  
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(content)
    const cleaned = cleanObject(data)
    
    // Write back with proper formatting
    fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2) + '\n', 'utf8')
    console.log(`  ✓ Cleaned ${path.basename(filePath)}\n`)
    return true
  } catch (error) {
    console.error(`  ✗ Error cleaning ${path.basename(filePath)}:`, error.message)
    return false
  }
}

function main() {
  console.log('🧹 Cleaning 🔴 emojis and placeholders from JSON files...\n')
  
  const contentDir = path.join(__dirname, '..', 'src', 'content')
  const files = ['site.json', 'projects.json', 'about.json']
  
  let cleanedCount = 0
  
  for (const file of files) {
    const filePath = path.join(contentDir, file)
    if (fs.existsSync(filePath)) {
      if (cleanJsonFile(filePath)) {
        cleanedCount++
      }
    } else {
      console.log(`  ⚠ File not found: ${file}\n`)
    }
  }
  
  console.log(`✅ Cleaned ${cleanedCount} JSON files`)
  console.log('\nAll 🔴 emojis and placeholder text have been removed from JSON files.')
  console.log('These files now match the cleaned Sanity content.')
}

main()
