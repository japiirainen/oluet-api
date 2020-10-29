import { extendType, mutationType } from '@nexus/schema'
import { Juoma as JuomaT, PrismaClient } from '@prisma/client'
import { PrismaClientOptions } from '@prisma/client/runtime'
import { getNewData } from '../../utils/getData'
import { ALKO_FILE, ALKO_URI, DESTINATION_LOC } from '../../utils/constants'
import { readXlsx } from '../../utils/readExel'
import { Juoma } from './Juoma'

export const CrudMutation = mutationType({
   definition(t) {
      t.crud.createOneJuoma()
      t.crud.updateOneJuoma()
   },
})

export const wipeDrinks = extendType({
   type: 'Mutation',
   definition(t) {
      t.field('wipeAllDrinks', {
         type: 'String',
         resolve: wipeDrinksResolver,
      })
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
               data.map((juoma: JuomaT) =>
                  prisma.price.create({
                     data: {
                        productId: juoma.productId,
                        date: juoma.date,
                        hinta: juoma.hinta || 1,
                     },
                  })
               )
            )
            const res = await Promise.all(
               data.map((juoma: JuomaT) => prisma.juoma.create({ data: juoma }))
            )
            return res
         },
      })
   },
})

const wipeDrinksResolver = async (
   _root: any,
   _args: any,
   { prisma }: { prisma: PrismaClient<PrismaClientOptions, never> }
): Promise<any> => {
   await prisma.juoma.deleteMany({})
   return 'success'
}

export const dailyUpdate = async (
   _root: any,
   _args: any,
   { prisma }: { prisma: PrismaClient<PrismaClientOptions, never> }
): Promise<any> => {
   await Promise.all([
      getNewData(ALKO_URI, DESTINATION_LOC, ALKO_FILE),
      prisma.juoma.deleteMany({}),
   ])
   const data = await readXlsx(ALKO_FILE)
   await Promise.all(
      data.map((juoma: JuomaT) =>
         prisma.price.create({
            data: {
               productId: juoma.productId,
               date: juoma.date,
               hinta: juoma.hinta || 1,
            },
         })
      )
   )
   const res = await Promise.all(data.map((juoma: JuomaT) => prisma.juoma.create({ data: juoma })))
   return res
}
