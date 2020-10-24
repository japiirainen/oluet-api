import { objectType } from '@nexus/schema'

export const Price = objectType({
   name: 'Price',
   definition(t) {
      t.id('id')
      t.date('date', { description: 'Listing date provided by Alko.' })
      t.string('productId', { description: 'Id if the product in question.' })
      t.float('hinta', { description: 'Price if the product.' })
   },
})
