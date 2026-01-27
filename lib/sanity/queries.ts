import { groq } from 'next-sanity'

export const siteQuery = groq`*[_type == "site"][0]`
export const projectCategoriesQuery = groq`*[_type == "projectCategory"] | order(name asc)`
export const projectsQuery = groq`*[_type == "project"] | order(title asc)`
export const projectByIdQuery = groq`*[_type == "project" && id == $id][0]`
export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(title asc)`
export const projectsByCategoryQuery = groq`*[_type == "project" && category._ref == $categoryId] | order(title asc)`
export const projectsByRegionQuery = groq`*[_type == "project" && region == $region] | order(title asc)`
export const aboutQuery = groq`*[_type == "about"][0]`
