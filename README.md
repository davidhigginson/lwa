# The Little Way Association - Website

A modern, responsive charity website built with Next.js 15, Tailwind CSS, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## 🌟 Features

- **Modern Design** - Clean, accessible, mobile-first design inspired by leading charity websites
- **Themeable Design System** - CSS custom properties for easy brand customization
- **Dual Donation Options** - Integration with CharityCheckout + modern custom donation form
- **Lightweight CMS** - JSON-based content management for easy updates
- **Optimized Performance** - Static generation, image optimization, and modern best practices
- **Fully Responsive** - Works beautifully on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd lwa-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
lwa-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── donate/             # Donation page (dual options)
│   │   ├── get-involved/       # Ways to help page
│   │   ├── our-work/           # Projects listing & detail pages
│   │   ├── globals.css         # Global styles & design tokens
│   │   ├── layout.tsx          # Root layout with header/footer
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Page sections (Hero, CTA, etc.)
│   │   └── ui/                 # Reusable UI components
│   ├── content/                # CMS JSON files
│   │   ├── site.json           # Site configuration
│   │   ├── projects.json       # Project data
│   │   ├── about.json          # About page content
│   │   └── README.md           # Content management guide
│   └── lib/                    # Utility functions
│       ├── utils.ts            # Helper functions
│       └── content.ts          # Content type definitions
└── public/
    └── images/                 # Static images
```

## 🎨 Theming

The design system uses CSS custom properties for easy customization. Edit `/src/app/globals.css`:

```css
:root {
  /* Primary Brand Colors - Light Blue Theme */
  --color-primary-50: #f0f9ff;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  /* ... */

  /* Secondary - Warm Gold (for accents) */
  --color-secondary-500: #f59e0b;
  /* ... */
}
```

### Changing the Theme

1. Choose your new primary color palette
2. Update the CSS custom properties in `globals.css`
3. The entire site will automatically update

## 📝 Content Management

Content is managed through JSON files in `/src/content/`. No database required!

### Updating Content

1. **Site Settings** (`site.json`) - Name, tagline, contact info, navigation
2. **Projects** (`projects.json`) - Add/edit project details
3. **About Page** (`about.json`) - Mission, stats, St. Therese info

See `/src/content/README.md` for detailed instructions.

## 💳 Donation System

Two donation options are provided:

### 1. CharityCheckout Integration
Links to the existing CharityCheckout donation page for trusted, established processing.

### 2. Custom Donation Form
A modern, Stripe-style donation form with:
- One-time and monthly donation options
- Suggested amounts with custom input
- Gift Aid support (UK taxpayers)
- Multi-step checkout flow

> **Note**: The custom form is a demo. For production, integrate with Stripe, GoCardless, or your preferred payment processor.

## 🖼️ Images

The project uses placeholder visuals. For production:

1. Add project images to `/public/images/projects/`
2. Update image paths in `projects.json`
3. Add St. Therese and other images as needed

**Recommended image sizes:**
- Project images: 1200×800px (16:9 ratio)
- Optimize to <200KB per image

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: DM Sans, DM Serif Display (Google Fonts)

## 🔧 Customization Ideas

### Add a Newsletter Signup
Integrate with Mailchimp, ConvertKit, or your email service.

### Add a Blog
Use MDX for blog posts, or integrate with a headless CMS like Sanity or Contentful.

### Add Event Calendar
For fundraising events, parish collections, etc.

### Multi-language Support
Next.js has built-in i18n support for internationalization.

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, projects, stats, CTA |
| About | `/about` | Mission, St. Therese, what we fund |
| Our Work | `/our-work` | Filterable project gallery |
| Project Detail | `/our-work/[id]` | Individual project pages |
| Get Involved | `/get-involved` | Ways to help and donate |
| Contact | `/contact` | Contact form and FAQ |
| Donate | `/donate` | Dual donation options |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project was created for The Little Way Association. All rights reserved.

---

Built with ❤️ for those in greatest need.
