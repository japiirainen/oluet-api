import { objectType } from '@nexus/schema'

export const Price = objectType({
   name: 'Price',
   definition(t) {
      t.id('id')
      t.date('date')
      t.string('productId')
      t.float('hinta')
   },
})
