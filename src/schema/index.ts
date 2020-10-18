import path from 'path'
import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { mutationType } from '@nexus/schema'
import { queryType } from '@nexus/schema'
import { objectType } from '@nexus/schema'

const JuomeT = objectType({
   name: 'Juoma',
   definition(t) {
      t.id('id')
      t.string('nimi'), t.string('valmistaja'), t.float('pulloKoko')
      t.float('hinta')
      t.string('litraHinta')
      t.string('tyyppi')
      t.string('alaTyyppi', { nullable: true })
      t.string('olutTyyppi', { nullable: true })
      t.string('valmistusMaa')
      t.string('alue')
      t.int('vuosikerta')
      t.string('huomautus', { nullable: true })
      t.string('rypaleet', { nullable: true })
      t.string('luennehdinta')
      t.string('pakkausTyyppi')
      t.string('suljentaTyyppi')
      t.float('alkoholiProsentti')
      t.float('hapotGL')
      t.float('sokeriGL')
      t.float('energia100ML')
      t.string('Valikoima')
   },
})

const Query = queryType({
   definition(t) {
      t.crud.juoma(), t.crud.juomas()
   },
})

const Mutation = mutationType({
   definition(t) {
      t.crud.createOneJuoma(), t.crud.updateOneJuoma()
   },
})

// --------------------------------------------------------------------->
const pathToSchema = path.join(__dirname, '..', '..', 'schema.graphql')
const pathToTypes = path.join(__dirname, 'generated', 'nexus.ts')
const pathToContext = path.join(__dirname, '..', 'utils', 'context.ts')

export default makeSchema({
   types: [Query, Mutation, JuomeT],
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
   },
})
