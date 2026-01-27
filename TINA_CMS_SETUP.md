# Tina CMS Setup

Tina CMS has been installed and configured for this project. You can now edit content through a visual interface.

## Getting Started

### Local Development (File-based)

For local development, you can use Tina CMS without any cloud setup. The content will be saved directly to your JSON files.

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the admin interface:**
   Navigate to `http://localhost:3000/admin` in your browser.

3. **Edit content:**
   - Click on any collection (Site Configuration, Projects, or About Page Content)
   - Make your changes
   - Click "Save" to save changes to the JSON files

### Production Setup (Tina Cloud - Optional)

For production, you can set up Tina Cloud for collaborative editing and version control:

1. **Sign up for Tina Cloud:**
   - Go to https://tina.io
   - Create an account and set up a project

2. **Get your credentials:**
   - Copy your Client ID and Token from the Tina Cloud dashboard

3. **Configure environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`

## Content Types

### 1. Site Configuration (`site.json`)
Controls the main site settings including:
- Site name, tagline, and description
- Contact information
- Social media links
- Navigation menu
- Footer links

### 2. Projects (`projects.json`)
Manages all project content:
- Project categories
- Individual projects with details like:
  - Title, location, country, region
  - Category assignment
  - Images
  - Descriptions and impact
  - Featured status

### 3. About Page Content (`about.json`)
Controls all content on the About page:
- Hero section
- Various content sections
- St. Therese information
- Little Way philosophy
- Stats and more

## File Structure

```
lwa-website/
├── tina/
│   └── config.ts          # Tina CMS configuration and schemas
├── src/
│   ├── app/
│   │   └── admin/         # Admin interface route
│   └── content/           # Content JSON files (editable via Tina)
│       ├── site.json
│       ├── projects.json
│       └── about.json
└── admin/                 # Generated admin UI (gitignored)
```

## Notes

- Changes made through Tina CMS are saved directly to the JSON files in `src/content/`
- The admin folder is automatically generated and should not be committed to git
- For local development, you don't need Tina Cloud credentials
- The content loading in your app (`src/lib/content.ts`) continues to work as before - it reads from the same JSON files

## Troubleshooting

If you encounter issues:

1. **Admin page not loading:**
   - Make sure you're running `npm run dev` (not just `next dev`)
   - Check that the `tina/config.ts` file exists

2. **Changes not saving:**
   - Ensure you have write permissions to the `src/content/` directory
   - Check the browser console for errors

3. **Build errors:**
   - Make sure to run `npm run build` which includes the Tina build step
   - The admin interface is only available in development mode
