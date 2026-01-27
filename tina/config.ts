import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Configuration",
        path: "src/content",
        match: {
          include: "site.json",
        },
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Site Name",
            required: true,
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "registeredCharity",
            label: "Registered Charity Number",
            required: true,
          },
          {
            type: "number",
            name: "yearFounded",
            label: "Year Founded",
            required: true,
          },
          {
            type: "string",
            name: "annualFunding",
            label: "Annual Funding",
            required: true,
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "email",
                label: "Email",
                required: true,
              },
              {
                type: "string",
                name: "phone",
                label: "Phone",
                required: true,
              },
              {
                type: "string",
                name: "address",
                label: "Address",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "donationUrl",
            label: "Donation URL",
            required: true,
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "href",
                label: "URL",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "Call to Action",
            fields: [
              {
                type: "string",
                name: "primary",
                label: "Primary CTA",
                required: true,
              },
              {
                type: "string",
                name: "secondary",
                label: "Secondary CTA",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              {
                type: "object",
                name: "links",
                label: "Footer Links",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "URL",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "src/content",
        match: {
          include: "projects.json",
        },
        format: "json",
        fields: [
          {
            type: "object",
            name: "categories",
            label: "Project Categories",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || "New Category" };
              },
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "ID",
                required: true,
                description: "Unique identifier (e.g., 'healthcare', 'water')",
              },
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "New Project" };
              },
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "ID",
                required: true,
                description: "Unique identifier (slug format)",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
                required: true,
              },
              {
                type: "string",
                name: "country",
                label: "Country",
                required: true,
              },
              {
                type: "string",
                name: "region",
                label: "Region",
                required: true,
                options: [
                  "Africa",
                  "Asia",
                  "Europe",
                  "South America",
                  "North America",
                  "Oceania",
                  "Various",
                ],
              },
              {
                type: "string",
                name: "category",
                label: "Category",
                required: true,
                description: "Must match a category ID",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
              {
                type: "string",
                name: "summary",
                label: "Summary",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "impact",
                label: "Impact",
                description: "Brief description of the impact (e.g., '75 children cared for')",
              },
              {
                type: "boolean",
                name: "featured",
                label: "Featured",
                description: "Show this project on the homepage",
              },
              {
                type: "boolean",
                name: "sourceVerified",
                label: "Source Verified",
                description: "Whether the source has been verified",
              },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About Page Content",
        path: "src/content",
        match: {
          include: "about.json",
        },
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "welcome",
            label: "Welcome Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "origin",
            label: "Origin Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "howToHelp",
            label: "How to Help Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "mission",
            label: "Mission Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "supporters",
            label: "Supporters Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "accountability",
            label: "Accountability Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "whatWeFund",
            label: "What We Fund Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "items",
                label: "Items",
                list: true,
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "stTherese",
            label: "St. Therese Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                required: true,
              },
              {
                type: "string",
                name: "intro",
                label: "Introduction",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "biography",
                label: "Biography",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "conventLife",
                label: "Convent Life",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "quote1",
                label: "Quote 1",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "death",
                label: "Death",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "legacy",
                label: "Legacy",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "littleWay",
            label: "Little Way Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "intro",
                label: "Introduction",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "meaning",
                label: "Meaning",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "practice",
                label: "Practice",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "simplicity",
                label: "Simplicity",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "modernRelevance",
                label: "Modern Relevance",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "prayer",
                label: "Prayer",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "mission",
                label: "Mission",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "closingQuote",
                label: "Closing Quote",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "appeal",
            label: "Appeal Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "mainAppeal",
                label: "Main Appeal",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "dailyMass",
            label: "Daily Mass Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.label}: ${item?.value}` };
              },
            },
            fields: [
              {
                type: "string",
                name: "value",
                label: "Value",
                required: true,
              },
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
