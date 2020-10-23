import { extendType, mutationType } from '@nexus/schema'
import { ALKO_FILE } from '../../utils/constants'
import { readXlsx } from '../../utils/readExel'
import { JuomaT } from './Juoma'
import { drop } from 'ramda'

export const CrudMutation = mutationType({
   definition(t) {
      t.crud.createOneJuoma(), t.crud.updateOneJuoma()
   },
})

export const saveAllDrinks = extendType({
   type: 'Mutation',
   definition(t) {
      t.field('saveAllDrinks', {
         type: JuomaT,
         async resolve(_root, _args, { prisma }): Promise<any> {
            const data = drop(4, await readXlsx(ALKO_FILE))
            return await Promise.all(data.map((juoma: any) => prisma.juoma.create({ data: juoma })))
         },
      })
   },
})
