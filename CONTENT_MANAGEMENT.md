# Content Management Guide

## Overview

This website uses a simple file-based content management system. All content is stored in JSON files in the `src/content/` directory.

## Content Files

### 1. `site.json`
Contains site-wide configuration:
- Site name, tagline, and description
- Contact information (email, phone, address)
- Social media links
- Navigation menu items
- Footer links
- Call-to-action text

### 2. `projects.json`
Contains all project information:
- Project categories
- Individual projects with:
  - Title, location, country, region
  - Category assignment
  - Images
  - Descriptions and impact
  - Featured status

### 3. `about.json`
Contains all About page content:
- Hero section
- Welcome section
- Origin, mission, and other content sections
- St. Therese information
- Little Way philosophy
- Stats and more

## How to Edit Content

### Option 1: Direct File Editing

1. Open the JSON file you want to edit in your code editor
2. Make your changes (ensure valid JSON syntax)
3. Save the file
4. Test locally with `npm run dev`
5. Commit and push changes to deploy

### Option 2: Git Workflow

1. Clone the repository
2. Make changes to JSON files
3. Commit: `git commit -am "Update content"`
4. Push: `git push origin main`
5. Changes will deploy automatically (if using Vercel/GitHub Actions)

## JSON Syntax Tips

- Always use double quotes for strings
- Use commas to separate items (but not after the last item)
- Ensure proper nesting and brackets match
- Validate JSON before committing (most editors do this automatically)

## Admin Interface

Visit `/admin` to see an overview of all content files and editing instructions.

## Best Practices

1. **Backup before editing**: Make sure you have a backup or can revert changes
2. **Test locally**: Always test changes with `npm run dev` before deploying
3. **Validate JSON**: Use a JSON validator to ensure syntax is correct
4. **Small changes**: Make small, incremental changes rather than large edits
5. **Commit messages**: Use descriptive commit messages for content changes

## Troubleshooting

### JSON Syntax Errors
If you get JSON syntax errors:
- Check for missing commas
- Ensure all strings use double quotes
- Verify brackets and braces match
- Use a JSON validator tool

### Changes Not Showing
- Clear browser cache
- Restart dev server (`npm run dev`)
- Check that files are saved correctly
- Verify the JSON structure matches the expected format

## Need Help?

- Check the TypeScript types in `src/lib/content.ts` for the expected structure
- Review existing content files for examples
- Use a JSON editor with syntax highlighting
