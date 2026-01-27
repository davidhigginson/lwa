# Tina Cloud Setup Guide

This guide will walk you through setting up Tina Cloud for your project.

## Step 1: Create a Tina Cloud Account

1. Go to [https://app.tina.io/signin](https://app.tina.io/signin)
2. Sign in with your GitHub account
3. Authorize Tina to access your repositories

## Step 2: Create a New Project

1. Once logged in, click "New Project" or select an existing project
2. Configure your project:
   - **Project Name**: e.g., "Little Way Association Website"
   - **Site URLs**: 
     - Local: `http://localhost:3000`
     - Production: Your production URL (e.g., `https://yourdomain.com`)
   - **Repository**: Connect to your GitHub repository
   - **Branch**: Usually `main` or `master`

## Step 3: Get Your Credentials

1. **Client ID**:
   - Go to your project's "Overview" tab
   - Copy the "Client ID" value

2. **Token**:
   - Go to the "Tokens" tab
   - Click "Create Token"
   - Choose "Read/Write" for full editing capabilities (or "Read Only" for read-only access)
   - Copy the token (you won't be able to see it again, so save it securely)

## Step 4: Configure Environment Variables

1. Open `.env.local` in the project root
2. Add your credentials:
   ```env
   NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
   TINA_TOKEN=your-token-here
   NEXT_PUBLIC_TINA_BRANCH=main
   ```

3. Save the file

## Step 5: Test the Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/admin`
3. You should see the Tina CMS admin interface
4. Try editing some content to verify everything works

## Step 6: Deploy to Production

When deploying to production (Vercel, Netlify, etc.), make sure to add the same environment variables:

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `NEXT_PUBLIC_TINA_BRANCH` (optional)

### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the three variables above
4. Redeploy your site

### For Netlify:
1. Go to Site settings
2. Navigate to "Environment variables"
3. Add the three variables above
4. Redeploy your site

## Troubleshooting

### Admin page shows "Unauthorized"
- Check that your `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` are correctly set in `.env.local`
- Make sure you've restarted the dev server after adding the variables
- Verify the token hasn't expired (create a new one if needed)

### Changes not saving
- Ensure you're using a "Read/Write" token, not "Read Only"
- Check that your GitHub repository is properly connected in Tina Cloud
- Verify you have write permissions to the repository

### Build errors
- Make sure all environment variables are set in your deployment platform
- Run `npm run build` locally to check for any configuration issues

## Next Steps

Once set up, you can:
- Edit content through the `/admin` interface
- Collaborate with team members (they'll need access to the Tina Cloud project)
- Use version control through Git integration
- Set up preview deployments for content review

For more information, visit the [Tina Cloud Documentation](https://tina.io/docs/going-live/tinacloud/).
