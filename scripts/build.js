#!/usr/bin/env node

/**
 * Build script that runs tinacms build if TinaCloud credentials are present
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Load .env.local if it exists
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '';
const token = process.env.TINA_TOKEN || '';
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || 
               process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || 
               process.env.HEAD || 
               'main';

const hasTinaCloudCredentials = clientId && token && clientId !== '' && token !== '';

if (hasTinaCloudCredentials) {
  console.log('✓ TinaCloud credentials detected');
  console.log(`  Client ID: ${clientId.substring(0, 8)}...`);
  console.log(`  Branch: ${branch}`);
  console.log('Running tinacms build...');
  
  try {
    const output = execSync('tinacms build', { 
      encoding: 'utf8',
      env: {
        ...process.env,
        NEXT_PUBLIC_TINA_CLIENT_ID: clientId,
        TINA_TOKEN: token,
        NEXT_PUBLIC_TINA_BRANCH: branch,
      }
    });
    console.log(output);
    console.log('✓ TinaCMS build completed successfully');
  } catch (error) {
    const errorMessage = error.message || error.stdout || error.stderr || '';
    const isBranchNotIndexed = errorMessage.includes('not on TinaCloud') || 
                               errorMessage.includes('not indexed') ||
                               errorMessage.includes('unindexed');
    
    if (isBranchNotIndexed) {
      console.warn('\n⚠ TinaCMS build skipped: Branch "' + branch + '" is not indexed in TinaCloud');
      console.warn('  The admin interface will not be available in production.');
      console.warn('  To fix this:');
      console.warn('  1. Go to https://app.tina.io/projects/' + clientId + '/configuration');
      console.warn('  2. Click on the unindexed branch to trigger indexing');
      console.warn('  3. Wait for indexing to complete (may take a few minutes)');
      console.warn('  4. Or push a new commit to trigger automatic indexing');
      console.warn('\n  Continuing with Next.js build (site will work without admin interface)...\n');
    } else {
      console.error('\n✗ TinaCMS build failed');
      console.error('\nTroubleshooting steps:');
      console.error('1. Verify your branch "' + branch + '" exists in TinaCloud');
      console.error('2. Go to https://app.tina.io/projects/' + clientId + '/configuration');
      console.error('3. Make sure the branch is enabled/configured');
      console.error('4. Verify your TINA_TOKEN has the correct permissions');
      console.error('\nError details:', errorMessage.substring(0, 500));
      process.exit(1);
    }
  }
} else {
  console.log('⚠ No TinaCloud credentials detected. Skipping tinacms build.');
  console.log('  The admin interface will not be available in production.');
  console.log('  To enable it, set NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN environment variables.');
}

console.log('\nBuilding Next.js application...');
try {
  execSync('next build', { stdio: 'inherit' });
  console.log('\n✓ Build completed successfully');
} catch (error) {
  console.error('\n✗ Next.js build failed:', error.message);
  process.exit(1);
}
