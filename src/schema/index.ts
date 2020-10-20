import path from 'path'
import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import * as types from './allTypes'

// --------------------------------------------------------------------->
const pathToSchema = path.join(__dirname, '..', '..', 'schema.graphql')
const pathToTypes = path.join(__dirname, 'generated', 'nexus.ts')
const pathToContext = path.join(__dirname, '..', 'utils', 'context.ts')

export default makeSchema({
   types,
   plugins: [nexusPrisma({ experimentalCRUD: true })],
   outputs: {
      schema: pathToSchema,
      typegen: pathToTypes,
   },
   typegenAutoConfig: {
      contextType: 'Context.Context',
      sources: [
         {
            source: '@prisma/client',
            alias: 'prisma',
         },
         {
            source: require.resolve(pathToContext),
            alias: 'Context',
         },
      ],
      backingTypeMap: {
         Date: 'Date',
      },
      debug: process.env.NODE_ENV === 'development',
   },
})
