# Content Management

This directory contains the content files for The Little Way Association website. Edit these JSON files to update the website content.

## Files

### `site.json`
Main site configuration including:
- Site name and tagline
- Charity registration number
- Contact information
- Social media links
- Navigation menu items
- Donation URL

### `projects.json`
Contains all project data:
- **categories**: List of project categories (healthcare, water, food, etc.)
- **projects**: Individual project entries with:
  - `id`: Unique identifier (used in URLs)
  - `title`: Project title
  - `location`: Specific location
  - `country`: Country name
  - `region`: Geographic region (Africa, Asia, etc.)
  - `category`: Category ID from the categories list
  - `image`: Path to project image
  - `summary`: Short description (shown in cards)
  - `description`: Full description (shown on detail page)
  - `impact`: Impact statement
  - `featured`: Whether to show on homepage

### `about.json`
About page content including:
- Hero section text
- Mission statement
- Information about supporters
- What donations fund
- St. Therese biography
- Statistics

## Adding New Content

### Adding a New Project

1. Open `projects.json`
2. Add a new entry to the `projects` array:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "location": "City, Country",
  "country": "Country Name",
  "region": "Africa",
  "category": "healthcare",
  "image": "/images/projects/project-image.jpg",
  "summary": "Brief description for cards",
  "description": "Full description for the project page",
  "impact": "Impact statement",
  "featured": true
}
```

3. Add the corresponding image to `/public/images/projects/`

### Adding a New Category

1. Open `projects.json`
2. Add a new entry to the `categories` array:

```json
{
  "id": "category-id",
  "name": "Category Name",
  "description": "Category description"
}
```

3. Add an icon for the category in the relevant components

## Image Guidelines

- **Project images**: 1200x800px recommended, JPG format
- **Aspect ratio**: 16:9 for consistency
- **File size**: Optimize to under 200KB
- **Location**: `/public/images/projects/`

## Updating Site Information

Edit `site.json` to update:
- Charity registration number
- Contact details
- Social media links
- Navigation structure
- Donation page URL


