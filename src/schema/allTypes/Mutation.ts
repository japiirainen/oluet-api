import { extendType, mutationType } from '@nexus/schema'
import { ALKO_FILE } from '../../utils/constants'
import { readXlsx } from '../../utils/readExel'
import { Juoma } from './Juoma'

export const CrudMutation = mutationType({
   definition(t) {
      t.crud.createOneJuoma()
      t.crud.updateOneJuoma()
   },
})

export const saveAllDrinks = extendType({
   type: 'Mutation',
   definition(t) {
      t.field('saveAllDrinks', {
         type: Juoma,
         async resolve(_root, _args, { prisma }): Promise<any> {
            const data = await readXlsx(ALKO_FILE)
            await Promise.all(
               data.map((juoma: any) =>
                  prisma.price.create({
                     data: {
                        productId: juoma.productId,
                        date: juoma.date,
                        hinta: juoma.hinta,
                     },
                  })
               )
            )
            const res = await Promise.all(
               data.map((juoma: any) => prisma.juoma.create({ data: juoma }))
            )
            return res[0]
         },
      })
   },
})
