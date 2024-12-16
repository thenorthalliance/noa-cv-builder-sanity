import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemas } from './schemas'
import { deskStructure } from './deskStructure'
import { tags } from 'sanity-plugin-tags'
import { presentationTool } from 'sanity/presentation'

const SANITY_STUDIO_PREVIEW_URL = (
  process.env.SANITY_STUDIO_PREVIEW_URL ||
  'http://localhost:5173'
)

export default defineConfig({
  name: 'default',
  title: 'NoA CV Builder',

  projectId: 'oa6bybsk',
  dataset: 'production',

  plugins: [
    structureTool({structure: deskStructure}),
    visionTool(),
    tags({}),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),
  ],

  schema: {
    types: schemas,
  },
})
