/**
 * Content Management System
 * 
 * This file provides type-safe access to the JSON-based content files.
 * To update content, edit the JSON files in /src/content/
 * 
 * For a more advanced CMS, this could be replaced with:
 * - Sanity.io
 * - Contentful
 * - Strapi
 * - MDX files with gray-matter
 */

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
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  country: string;
  region: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  impact: string;
  featured: boolean;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
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
    items: string[];
  };
  stTherese: {
    title: string;
    content: string;
    philosophy: string;
    image: string;
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

// Content getters with type safety
export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig;
}

export function getProjects(): Project[] {
  return projectsData.projects as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.projects.find((p) => p.id === id) as Project | undefined;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.projects.filter((p) => p.featured) as Project[];
}

export function getProjectsByCategory(categoryId: string): Project[] {
  return projectsData.projects.filter((p) => p.category === categoryId) as Project[];
}

export function getProjectsByRegion(region: string): Project[] {
  return projectsData.projects.filter((p) => p.region === region) as Project[];
}

export function getProjectCategories(): ProjectCategory[] {
  return projectsData.categories as ProjectCategory[];
}

export function getAboutContent(): AboutContent {
  return aboutData as AboutContent;
}

// Get unique regions from projects
export function getRegions(): string[] {
  return [...new Set(projectsData.projects.map((p) => p.region))];
}

// Get unique countries from projects
export function getCountries(): string[] {
  return [...new Set(projectsData.projects.map((p) => p.country))];
}


