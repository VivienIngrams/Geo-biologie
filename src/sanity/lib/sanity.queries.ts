import type { PortableTextBlock } from '@portabletext/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

import { sanityFetch } from './sanity.client'


// GROQ query to fetch posts by section
const postsBySectionQuery = (section: string) => groq`
*[_type == "post" && section == $section ]  {
  _id,
  _createdAt,
  title,
  title_en,
  slug,
  excerpt,
  excerpt_en,
  subtitles,
  mainImages,
  layout
}`



// Query to fetch all slugs for posts
export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export type Post = {
  _type: 'post'
  _id: string
  _publishedAt: string
  slug: { current: string }
  _createdAt: string
  mainImages: any[] 
  title: string
  title_en?: string
  subtitles?: string[]
  excerpt?: PortableTextBlock[]
  excerpt_en?: PortableTextBlock[]
  section?: 'gallery' | 'projets-actuels' | 'collaborations'
  layout: 'portrait' | 'square' | 'landscape'
  images?: any[]
}

// Query to fetch the home page data
export const homePageQuery = groq`
  *[_type == "home"][0] {
    mainImages[] 
  }
`

// Function to fetch the home page data
export async function getHomePage(client: SanityClient, options = {}) {
  const homePage = await client.fetch(homePageQuery, options)
  return homePage
}

export const bioQuery = groq`*[_type == "bioContent"]{
  _id,
  _type,
  "imageUrl": image.asset->url,
  biography {
    fr {
      biographyText[]{
        ... 
      },
      biographyText2[]{
        ... 
      },
      artisticTraining,
      organizer,
      exhibitions
    },
    en {
      biographyText[]{
        ... 
      },
      biographyText2[]{
        ... 
      },
      artisticTraining,
      organizer,
      exhibitions
    }
  }
}
`

export async function getBioPage(client: SanityClient, options = {}) {
  const bioPage = await client.fetch(bioQuery, options)
  return bioPage
}
