import { groq } from 'next-sanity'

export const siteQuery = groq`*[_type == "site"][0]`
export const projectCategoriesQuery = groq`*[_type == "projectCategory"] | order(name asc)`
export const projectsQuery = groq`*[_type == "project"] | order(title asc){
  ...,
  category->{
    _id,
    id,
    name,
    description
  }
}`
export const projectByIdQuery = groq`*[_type == "project" && id == $id][0]{
  ...,
  category->{
    _id,
    id,
    name,
    description
  }
}`
export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(title asc){
  ...,
  category->{
    _id,
    id,
    name,
    description
  }
}`
export const projectsByCategoryQuery = groq`*[_type == "project" && category->id == $categoryId] | order(title asc){
  ...,
  category->{
    _id,
    id,
    name,
    description
  }
}`
export const projectsByRegionQuery = groq`*[_type == "project" && region == $region] | order(title asc){
  ...,
  category->{
    _id,
    id,
    name,
    description
  }
}`
export const aboutQuery = groq`*[_type == "about"][0]{
  ...,
  stTherese{
    ...,
    image{
      ...,
      asset->{
        _id,
        _type,
        url
      }
    }
  }
}`
