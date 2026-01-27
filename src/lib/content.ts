/**
 * Content Management System
 * 
 * This file provides type-safe access to content from Sanity CMS.
 * Falls back to JSON files if Sanity is not configured.
 */

// Conditional Sanity imports - only import if configured
const isSanityConfigured = () => {
  return typeof window === 'undefined' && !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== ''
}

let client: any = null
let siteQuery: any = null
let projectCategoriesQuery: any = null
let projectsQuery: any = null
let projectByIdQuery: any = null
let featuredProjectsQuery: any = null
let projectsByCategoryQuery: any = null
let projectsByRegionQuery: any = null
let aboutQuery: any = null

if (isSanityConfigured()) {
  try {
    const sanityClient = require('../../lib/sanity/client').client
    const queries = require('../../lib/sanity/queries')
    client = sanityClient
    siteQuery = queries.siteQuery
    projectCategoriesQuery = queries.projectCategoriesQuery
    projectsQuery = queries.projectsQuery
    projectByIdQuery = queries.projectByIdQuery
    featuredProjectsQuery = queries.featuredProjectsQuery
    projectsByCategoryQuery = queries.projectsByCategoryQuery
    projectsByRegionQuery = queries.projectsByRegionQuery
    aboutQuery = queries.aboutQuery
  } catch (e) {
    // Sanity not available - will use JSON fallback
    console.warn('Sanity not available, using JSON fallback')
  }
}

// Fallback imports
import siteData from "@/content/site.json";
import projectsData from "@/content/projects.json";
import aboutData from "@/content/about.json";

// Type definitions
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  registeredCharity: string;
  yearFounded: number;
  annualFunding: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    facebook: string;
  };
  donationUrl: string;
  navigation: {
    label: string;
    href: string;
  }[];
  cta: {
    primary: string;
    secondary: string;
  };
  footer?: {
    links: {
      label: string;
      href: string;
    }[];
  };
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  _id?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  country: string;
  region: string;
  category: string | { _ref: string; _type: string };
  image: string | { asset: { _ref: string; _type: string } };
  summary: string;
  description: string;
  impact?: string;
  featured: boolean;
  sourceVerified?: boolean;
  _id?: string;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
  };
  welcome: {
    title: string;
    content: string;
  };
  origin: {
    title: string;
    content: string;
  };
  howToHelp: {
    title: string;
    content: string;
  };
  mission: {
    title: string;
    content: string;
  };
  supporters: {
    title: string;
    content: string;
  };
  accountability: {
    title: string;
    content: string;
  };
  whatWeFund: {
    title: string;
    description: string;
    items: string[];
  };
  stTherese: {
    title: string;
    subtitle: string;
    intro: string;
    biography: string;
    conventLife: string;
    quote1: string;
    death: string;
    legacy: string;
    image: string | { asset: { _ref: string; _type: string } };
  };
  littleWay: {
    title: string;
    intro: string;
    meaning: string;
    practice: string;
    simplicity: string;
    modernRelevance: string;
    prayer: string;
    mission: string;
    closingQuote: string;
  };
  appeal: {
    title: string;
    mainAppeal: string;
    description: string;
  };
  dailyMass: {
    title: string;
    content: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
}


// Helper to normalize project category
const normalizeCategory = (category: string | { _ref: string; _type: string } | { id?: string; _id?: string; _ref?: string }): string => {
  if (typeof category === 'string') return category
  // If category is expanded from Sanity (has id field), use that
  if (category && typeof category === 'object' && 'id' in category && category.id) {
    return category.id
  }
  // Otherwise return the ref
  return category._ref || ''
}

// Helper to normalize image
const normalizeImage = (image: string | { asset?: { _ref?: string; _type?: string; url?: string } | { _ref: string; _type: string } } | { _type?: string; asset?: { _ref?: string; _type?: string; url?: string } }): string => {
  if (typeof image === 'string') return image
  // For Sanity images, convert to URL
  if (isSanityConfigured() && image && typeof image === 'object') {
    try {
      // If asset has a direct URL, use it
      if (image.asset && 'url' in image.asset && image.asset.url) {
        return image.asset.url
      }
      // Otherwise use urlFor to build the URL
      const { urlFor } = require('../../lib/sanity/client')
      const url = urlFor(image).url()
      return url || ''
    } catch (e) {
      console.warn('Failed to convert Sanity image to URL:', e)
      return ''
    }
  }
  return ''
}

// Content getters with Sanity support and JSON fallback
export async function getSiteConfig(): Promise<SiteConfig> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch(siteQuery)
      if (data) {
        return data as SiteConfig
      }
    } catch (error) {
      console.warn('Failed to fetch from Sanity, using JSON fallback:', error)
    }
  }
  return siteData as SiteConfig
}

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch(projectCategoriesQuery)
      if (data && data.length > 0) {
        return data.map((cat: any) => ({
          id: cat.id,
          name: cat.name,
          description: cat.description,
        })) as ProjectCategory[]
      }
    } catch (error) {
      console.warn('Failed to fetch from Sanity, using JSON fallback:', error)
    }
  }
  return projectsData.categories as ProjectCategory[]
}

export async function getProjects(): Promise<Project[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch(projectsQuery)
      if (data && data.length > 0) {
        return data.map((proj: any) => ({
          ...proj,
          category: normalizeCategory(proj.category),
          image: normalizeImage(proj.image),
        })) as Project[]
      }
    } catch (error) {
      console.warn('Failed to fetch from Sanity, using JSON fallback:', error)
    }
  }
  return projectsData.projects.map((p) => ({
    ...p,
    category: typeof p.category === 'string' ? p.category : p.category,
  })) as Project[]
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch(projectByIdQuery, { id })
      if (data) {
        return {
          ...data,
          category: normalizeCategory(data.category),
          image: normalizeImage(data.image),
        } as Project
      }
    } catch (error) {
      console.warn('Failed to fetch from Sanity, using JSON fallback:', error)
    }
  }
  const project = projectsData.projects.find((p) => p.id === id)
  return project ? {
    ...project,
    category: typeof project.category === 'string' ? project.category : project.category,
  } as Project : undefined
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter((p) => p.featured)
}

export async function getProjectsByCategory(categoryId: string): Promise<Project[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch(projectsByCategoryQuery, { categoryId })
      if (data && data.length > 0) {
        return data.map((proj: any) => ({
          ...proj,
          category: normalizeCategory(proj.category),
          image: normalizeImage(proj.image),
        })) as Project[]
      }
    } catch (error) {
      console.warn('Failed to fetch from Sanity, using JSON fallback:', error)
    }
  }
  const projects = await getProjects()
  return projects.filter((p) => {
    const cat = normalizeCategory(p.category)
    return cat === categoryId
  })
}

export async function getProjectsByRegion(region: string): Promise<Project[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch(projectsByRegionQuery, { region })
      if (data && data.length > 0) {
        return data.map((proj: any) => ({
          ...proj,
          category: normalizeCategory(proj.category),
          image: normalizeImage(proj.image),
        })) as Project[]
      }
    } catch (error) {
      console.warn('Failed to fetch from Sanity, using JSON fallback:', error)
    }
  }
  const projects = await getProjects()
  return projects.filter((p) => p.region === region)
}

export async function getAboutContent(): Promise<AboutContent> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch(aboutQuery)
      if (data) {
        // Convert Sanity image to URL if it exists
        const stThereseImage = data.stTherese?.image 
          ? normalizeImage(data.stTherese.image) 
          : (aboutData as AboutContent).stTherese.image
        
        return {
          ...data,
          stTherese: {
            ...data.stTherese,
            image: stThereseImage,
          },
        } as AboutContent
      }
    } catch (error) {
      console.warn('Failed to fetch from Sanity, using JSON fallback:', error)
    }
  }
  return aboutData as AboutContent
}

// Get unique regions from projects
export async function getRegions(): Promise<string[]> {
  const projects = await getProjects()
  return [...new Set(projects.map((p) => p.region))]
}

// Get unique countries from projects
export async function getCountries(): Promise<string[]> {
  const projects = await getProjects()
  return [...new Set(projects.map((p) => p.country))]
}
