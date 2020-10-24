import { extendType, queryType, stringArg } from '@nexus/schema'
import { ApolloError } from 'apollo-server-express'
import { Juoma } from './Juoma'

export const Query = queryType({
   definition(t) {
      t.crud.juoma()
      t.crud.juomas({ alias: 'juomat' })
      t.crud.price({ alias: 'hinta' })
      t.crud.prices({ alias: 'hinnat' })
   },
})

export const findByType = extendType({
   type: 'Query',
   definition(t) {
      t.field('etsiTyypilla', {
         list: true,
         args: {
            tyyppi: stringArg({ required: true }),
         },
         type: Juoma,
         //@ts-ignore
         async resolve(_parent, { tyyppi }, { prisma }) {
            const beers = await prisma.juoma.findMany({ where: { tyyppi: tyyppi } })
            if (!beers) throw new ApolloError('Kaljojen etsiminen epäonnistui...')
            return beers
         },
      })
   },
})
