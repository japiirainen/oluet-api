import { objectType } from '@nexus/schema'

export const JuomaT = objectType({
   name: 'Juoma',
   definition(t) {
      t.id('id')
      t.string('productId')
      t.string('nimi', { nullable: true })
      t.string('valmistaja', { nullable: true })
      t.string('pulloKoko', { nullable: true })
      t.string('hinta', { nullable: true })
      t.string('litraHinta', { nullable: true })
      t.string('uutuus', { nullable: true })
      t.string('hinnastoJarjestysKoodi', { nullable: true })
      t.string('tyyppi', { nullable: true })
      t.string('alaTyyppi', { nullable: true })
      t.string('erityisryhma', { nullable: true })
      t.string('olutTyyppi', { nullable: true })
      t.string('valmistusMaa', { nullable: true })
      t.string('alue', { nullable: true })
      t.string('vuosikerta', { nullable: true })
      t.string('etikettimerkintoja', { nullable: true })
      t.string('huomautus', { nullable: true })
      t.string('rypaleet', { nullable: true })
      t.string('luonnehdinta', { nullable: true })
      t.string('pakkausTyyppi', { nullable: true })
      t.string('suljentaTyyppi', { nullable: true })
      t.string('alkoholiProsentti', { nullable: true })
      t.string('hapotGL', { nullable: true })
      t.int('sokeriGL', { nullable: true })
      t.float('kantavierrep', { nullable: true })
      t.string('vari', { nullable: true })
      t.string('katkerot', { nullable: true })
      t.string('energia100ML', { nullable: true })
      t.string('valikoima', { nullable: true })
      t.string('EAN', { nullable: true })
   },
})
