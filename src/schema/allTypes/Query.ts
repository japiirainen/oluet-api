import { extendType, queryType, stringArg } from '@nexus/schema'
import { ApolloError } from 'apollo-server-express'
import { Juoma } from './Juoma'
import { Juoma as JuomaT, Price as PriceT } from '@prisma/client'
import { Price } from './Price'

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
         async resolve(_parent, { tyyppi }, { prisma }): Promise<JuomaT[]> {
            const beers = await prisma.juoma.findMany({ where: { tyyppi: tyyppi } })
            if (!beers) throw new ApolloError('Kaljojen etsiminen epäonnistui...')
            return beers
         },
      })
   },
})

export const priceHistory = extendType({
   type: 'Query',
   definition(t) {
      t.field('hintaHistoria', {
         list: true,
         args: {
            productId: stringArg({ required: true }),
         },
         type: Price,
         //@ts-ignore
         async resolve(_root, { productId }, { prisma }): Promise<PriceT[]> {
            const prices = await prisma.price.findMany({ where: { productId } })
            if (!prices) throw new ApolloError('hintahistorian hakeminen epäonnistui...')
            return prices
         },
      })
   },
})
