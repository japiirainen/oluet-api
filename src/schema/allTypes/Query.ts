import { queryType } from '@nexus/schema'

export const Query = queryType({
   definition(t) {
      t.crud.juoma()
      t.crud.juomas()
      t.crud.price()
      t.crud.prices()
   },
})
