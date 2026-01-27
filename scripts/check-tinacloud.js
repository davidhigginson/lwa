#!/usr/bin/env node

/**
 * Diagnostic script to check TinaCloud configuration and connection
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 TinaCloud Configuration Diagnostic\n');
console.log('=' .repeat(50));

// 1. Check environment variables
console.log('\n1. Checking Environment Variables:');
const envPath = path.join(__dirname, '..', '.env.local');
let clientId = '';
let token = '';
let branch = 'main';

if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      if (key === 'NEXT_PUBLIC_TINA_CLIENT_ID') clientId = value;
      if (key === 'TINA_TOKEN') token = value;
      if (key === 'NEXT_PUBLIC_TINA_BRANCH') branch = value;
    }
  });
}

if (clientId) {
  console.log(`   ✓ Client ID: ${clientId.substring(0, 8)}...${clientId.substring(clientId.length - 4)}`);
} else {
  console.log('   ✗ NEXT_PUBLIC_TINA_CLIENT_ID not found');
}

if (token) {
  console.log(`   ✓ Token: ${'*'.repeat(8)}...${token.substring(token.length - 4)}`);
} else {
  console.log('   ✗ TINA_TOKEN not found');
}

console.log(`   ✓ Branch: ${branch}`);

// 2. Check git repository
console.log('\n2. Checking Git Repository:');
try {
  const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
  console.log(`   ✓ Remote: ${remoteUrl}`);
  
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  console.log(`   ✓ Current branch: ${currentBranch}`);
  
  let hasRemoteBranch = false;
  try {
    const remoteBranchCheck = execSync(`git ls-remote --heads origin ${branch}`, { encoding: 'utf8' }).trim();
    hasRemoteBranch = !!remoteBranchCheck;
  } catch (error) {
    hasRemoteBranch = false;
  }
  
  if (hasRemoteBranch) {
    console.log(`   ✓ Branch '${branch}' exists on remote`);
  } else {
    console.log(`   ✗ Branch '${branch}' NOT found on remote`);
    console.log(`   → Try: git push origin ${branch}`);
  }
  
  const lastCommit = execSync('git log -1 --oneline', { encoding: 'utf8' }).trim();
  console.log(`   ✓ Last commit: ${lastCommit}`);
} catch (error) {
  console.log('   ✗ Error checking git:', error.message);
}

// 3. Check TinaCMS config
console.log('\n3. Checking TinaCMS Configuration:');
const configPath = path.join(__dirname, '..', 'tina', 'config.ts');
if (fs.existsSync(configPath)) {
  console.log('   ✓ tina/config.ts exists');
  const config = fs.readFileSync(configPath, 'utf8');
  if (config.includes('clientId')) {
    console.log('   ✓ Config has clientId field');
  }
  if (config.includes('token')) {
    console.log('   ✓ Config has token field');
  }
} else {
  console.log('   ✗ tina/config.ts not found');
}

// 4. Check admin files
console.log('\n4. Checking Admin Files:');
const adminPath = path.join(__dirname, '..', 'public', 'admin', 'index.html');
if (fs.existsSync(adminPath)) {
  console.log('   ⚠ Admin files exist locally (may be dev version)');
  const content = fs.readFileSync(adminPath, 'utf8');
  if (content.includes('localhost:4001')) {
    console.log('   ⚠ Admin files are development version (pointing to localhost)');
  }
} else {
  console.log('   ✓ No admin files (will be generated during build)');
}

// 5. Recommendations
console.log('\n5. Recommendations:');
console.log('   ' + '='.repeat(48));

if (!clientId || !token) {
  console.log('   ⚠ Missing credentials - add them to .env.local');
}

console.log('\n   Next steps:');
console.log('   1. Verify repository is connected in TinaCloud:');
console.log('      https://app.tina.io/projects/' + (clientId || 'YOUR_CLIENT_ID') + '/configuration');
console.log('   2. Check that branch is visible in GitHub:');
console.log('      https://github.com/davidhigginson/lwa/tree/' + branch);
console.log('   3. Try disconnecting and reconnecting repository in TinaCloud');
console.log('   4. Push a new commit to trigger indexing:');
console.log('      git commit --allow-empty -m "Trigger indexing"');
console.log('      git push origin ' + branch);
console.log('   5. Wait 10-15 minutes and check TinaCloud again');
console.log('\n   For more help, see: TINACLOUD_TROUBLESHOOTING.md');
console.log('   Or join TinaCMS Discord: https://discord.com/invite/zumN63Ybpf\n');
