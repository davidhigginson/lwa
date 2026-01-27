# Sanity CMS Setup Guide

## Overview

This website uses Sanity.io as its Content Management System. Sanity is a cloud-hosted CMS that allows multiple people to edit content through a visual interface.

## Step 1: Create a Sanity Account

1. Go to [https://www.sanity.io](https://www.sanity.io)
2. Click "Get started for free"
3. Sign up with your email or GitHub account

## Step 2: Create a New Project

1. Once logged in, click "Create project"
2. Fill in:
   - **Project name**: "Little Way Association" (or your preferred name)
   - **Organization**: Create a new organization or use existing
   - **Dataset name**: "production" (default)
   - **Plan**: Free tier is fine to start
3. Click "Create project"

## Step 3: Get Your Project ID

1. After creating the project, you'll see your Project ID
2. Copy this ID (it looks like: `abc123xyz`)
3. You can also find it later in: Project Settings → API → Project ID

## Step 4: Configure Environment Variables

### Local Development

1. Create or edit `.env.local` in the project root:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. Replace `your-project-id-here` with your actual Project ID

### Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
4. Make sure to set these for Production, Preview, and Development environments
5. Redeploy your site

## Step 5: Initialize Sanity Studio

1. Run the Sanity CLI to initialize:
   ```bash
   npx sanity init --env
   ```

2. When prompted:
   - Use existing project: **Yes**
   - Select your project
   - Output path: `./sanity` (or keep default)
   - Use TypeScript: **Yes**
   - Template: **Clean project with no predefined schemas**

3. This will create the Sanity Studio configuration

## Step 6: Access Sanity Studio

### Local Development

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/studio`

3. You'll be prompted to log in with your Sanity account

### Production

1. Deploy your site
2. Navigate to: `https://yourdomain.com/studio`
3. Log in with your Sanity account

## Step 7: Import Existing Content (Optional)

If you have existing content in JSON files:

1. Go to Sanity Studio (`/studio`)
2. Create documents for each content type:
   - Site Configuration (create one document)
   - Project Categories (create one for each category)
   - Projects (create one for each project)
   - About Page (create one document)

3. Copy content from your JSON files into Sanity

Alternatively, you can use Sanity's import tools or write a migration script.

## Step 8: Update Content Loading

The site is currently set up to use JSON files as a fallback. Once you've added content to Sanity:

1. Content will automatically load from Sanity
2. If Sanity is not configured, it falls back to JSON files
3. This ensures the site works even during setup

## Content Types

### Site Configuration
- Site name, tagline, description
- Contact information
- Social media links
- Navigation menu
- Footer links

### Project Categories
- ID (unique identifier)
- Name
- Description

### Projects
- ID (unique identifier)
- Title, location, country, region
- Category (reference to Project Category)
- Image
- Summary and description
- Impact statement
- Featured status
- Source verified status

### About Page
- Hero section
- Multiple content sections
- St. Therese information
- Little Way philosophy
- Stats

## Managing Access

To allow other people to edit content:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "Members" or "Access"
4. Click "Invite member"
5. Enter their email address
6. Choose their role:
   - **Editor**: Can edit content
   - **Viewer**: Can only view
   - **Administrator**: Full access

## Troubleshooting

### Studio won't load
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
- Verify the project ID matches your Sanity project
- Check browser console for errors

### Can't log in
- Make sure you're using the correct Sanity account
- Check that you have access to the project
- Try logging out and back in

### Content not showing
- Verify content exists in Sanity Studio
- Check that the dataset name matches (`production`)
- Ensure environment variables are set correctly
- Check browser console for API errors

## Support

- Sanity Documentation: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- Sanity Community: [https://slack.sanity.io](https://slack.sanity.io)
- Sanity Support: Check your Sanity dashboard

## Next Steps

1. Set up your Sanity project
2. Add environment variables
3. Access `/studio` to start editing
4. Import or create your content
5. Share access with your team
