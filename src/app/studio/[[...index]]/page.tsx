'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../../../../sanity/schemas'

const config = defineConfig({
  name: 'default',
  title: 'Little Way Association CMS',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Sanity Studio Not Configured</h1>
        <p>Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment variables.</p>
      </div>
    )
  }
  
  return <NextStudio config={config} />
}
