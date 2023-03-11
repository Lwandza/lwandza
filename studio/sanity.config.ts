import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

// const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'lwandza',

  projectId: 'fhl3cbuh',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],


  schema: {
    types: schemaTypes,
  },
})
