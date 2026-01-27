# Import Existing Content to Sanity

This guide will help you import your existing JSON content into Sanity CMS.

## Prerequisites

1. **Sanity Project Created**: You should have a Sanity project with ID `ppuccmhi`
2. **API Token**: You need a Sanity API token with write permissions

## Step 1: Get Your Sanity API Token

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project (`ppuccmhi`)
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it: "Import Script"
6. Choose **Editor** permissions (or **Administrator** for full access)
7. Copy the token (you won't see it again!)

## Step 2: Add Token to Environment

Add the token to your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ppuccmhi
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token-here
```

**Important**: Never commit `.env.local` to git - it contains your secret token!

## Step 3: Run the Import Script

```bash
npm run import:sanity
```

The script will:
1. ✅ Import Site Configuration
2. ✅ Import Project Categories (9 categories)
3. ✅ Import Projects (~21 projects)
4. ✅ Upload project images to Sanity
5. ✅ Import About Page Content
6. ✅ Upload St. Therese image

## What Gets Imported

### Site Configuration
- Site name, tagline, description
- Contact information
- Navigation menu
- Footer links
- Social media links

### Project Categories
All 9 categories:
- Healthcare & Medical
- Clean Water
- Food & Nutrition
- Homes & Shelter
- Education
- Children & Orphans
- Sanitation
- Religious
- Emergency Relief

### Projects
All projects with:
- Title, location, country, region
- Category assignment
- Images (uploaded to Sanity)
- Summary and description
- Impact statements
- Featured status

### About Page
All sections including:
- Hero section
- Welcome, Origin, Mission sections
- St. Therese information (with image)
- Little Way philosophy
- Stats

## Troubleshooting

### "SANITY_API_TOKEN not found"
- Make sure you added `SANITY_API_TOKEN` to `.env.local`
- Restart your terminal/IDE after adding it
- Verify the token is correct

### Image Upload Failures
- Some images might fail to upload if URLs are inaccessible
- You can upload images manually in Sanity Studio later
- The script will continue even if some images fail

### Category Not Found Errors
- Make sure categories are imported before projects
- The script imports categories first automatically
- Check that category IDs match between JSON and Sanity

### Duplicate Documents
- The script updates existing documents if they already exist
- Safe to run multiple times
- Won't create duplicates

## After Import

1. **Verify Content**: Go to `/studio` and check all imported content
2. **Upload Missing Images**: If any images failed, upload them manually in Studio
3. **Review and Edit**: Make any necessary adjustments to the imported content
4. **Test Site**: Verify the site loads content from Sanity correctly

## Manual Image Upload

If images didn't upload automatically:

1. Go to `/studio`
2. Open a Project document
3. Click on the Image field
4. Click "Upload" or "Select"
5. Upload the image from your computer
6. Or use "From URL" if the image is hosted elsewhere

## Next Steps

Once content is imported:
- ✅ Content is now in Sanity
- ✅ Team members can edit through `/studio`
- ✅ Changes sync automatically
- ✅ No more JSON file editing needed!
