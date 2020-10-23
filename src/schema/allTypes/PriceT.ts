import { objectType } from '@nexus/schema'

export const PriceT = objectType({
   name: 'PriceT',
   definition(t) {
      t.id('id')
      t.date('date')
      t.string('productId')
      t.float('hinta')
   },
})
