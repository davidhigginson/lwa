# Fixing TinaCloud Deployment Issue

## The Problem
Your Vercel deployment is failing with:
```
ERROR: Branch 'main' is not on TinaCloud
```

This means your TinaCloud project exists, but the 'main' branch hasn't been configured/enabled in TinaCloud.

## Solution Steps

### Step 1: Configure the Branch in TinaCloud

1. **Go to your TinaCloud project configuration:**
   - Visit: https://app.tina.io/projects/cdd00442-9e62-469b-9608-6695495f5a12/configuration
   - Or navigate: TinaCloud Dashboard → Your Project → Configuration tab

2. **Enable/Configure the 'main' branch:**
   - Look for the "Branches" section
   - Make sure the `main` branch is listed and enabled
   - If it's not there, you may need to:
     - Ensure your GitHub repository is properly connected
     - Push your 'main' branch to GitHub (if you haven't already)
     - Wait a few minutes for TinaCloud to sync

3. **Verify branch status:**
   - The branch should show as "Active" or "Enabled"
   - Check that it matches your repository's branch name exactly

### Step 2: Verify Environment Variables in Vercel

Make sure these are set in your Vercel project:

1. **Go to Vercel Dashboard:**
   - Navigate to your project settings
   - Go to "Environment Variables"

2. **Add/Verify these variables:**
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=cdd00442-9e62-469b-9608-6695495f5a12
   TINA_TOKEN=204faf8619d868e91d808c03ee2b79c0e2bdbcf5
   NEXT_PUBLIC_TINA_BRANCH=main
   ```

3. **Important:** 
   - Make sure these are set for **Production**, **Preview**, and **Development** environments
   - After adding/updating variables, you'll need to redeploy

### Step 3: Verify Your GitHub Repository Connection

1. **In TinaCloud:**
   - Go to your project settings
   - Check that your GitHub repository is properly connected
   - Verify the repository URL matches your actual repo

2. **In GitHub:**
   - Make sure your 'main' branch exists
   - Ensure it has at least one commit
   - Verify TinaCloud has access to the repository

### Step 4: Test Locally First

Before deploying to Vercel, test locally:

```bash
# Make sure your .env.local has the credentials
cd lwa-website
npm run build
```

If the local build succeeds, then the issue is likely just the branch configuration in TinaCloud.

### Step 5: Redeploy on Vercel

After configuring the branch in TinaCloud:

1. Go to your Vercel project
2. Click "Redeploy" or push a new commit
3. The build should now succeed

## Troubleshooting

### If the branch still doesn't appear in TinaCloud:

1. **Check repository connection:**
   - Disconnect and reconnect your GitHub repository in TinaCloud
   - Make sure you've authorized TinaCloud to access your repos

2. **Verify branch name:**
   - Make sure you're using the exact branch name (case-sensitive)
   - Check if your default branch is actually called 'main' or 'master'

3. **Wait for sync:**
   - Sometimes it takes a few minutes for TinaCloud to detect new branches
   - Try refreshing the TinaCloud dashboard

### If you get authentication errors:

1. **Regenerate your token:**
   - Go to TinaCloud → Your Project → Tokens
   - Create a new "Read/Write" token
   - Update `TINA_TOKEN` in both `.env.local` and Vercel

2. **Check token permissions:**
   - Make sure the token has access to your repository
   - Use "Read/Write" token, not "Read Only"

### Alternative: Use a Different Branch

If you can't get 'main' to work, you can:

1. Create a new branch in GitHub (e.g., 'production')
2. Configure that branch in TinaCloud
3. Update `NEXT_PUBLIC_TINA_BRANCH` to match

## Quick Checklist

- [ ] Branch 'main' is configured in TinaCloud
- [ ] Environment variables are set in Vercel (all environments)
- [ ] GitHub repository is connected in TinaCloud
- [ ] Local build succeeds (`npm run build`)
- [ ] Redeployed on Vercel after making changes

## Need Help?

- TinaCloud Docs: https://tina.io/docs/going-live/tinacloud/
- TinaCloud Dashboard: https://app.tina.io
- Your Project Config: https://app.tina.io/projects/cdd00442-9e62-469b-9608-6695495f5a12/configuration
