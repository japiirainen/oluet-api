import { objectType } from '@nexus/schema'

export default objectType({
   name: 'Juoma',
   definition(t) {
      t.id('id')
      t.string('nimi'), t.string('valmistaja'), t.float('pulloKoko')
      t.float('hinta')
      t.string('litraHinta')
      t.string('tyyppi')
      t.string('alaTyyppi', { nullable: true })
      t.string('olutTyyppi', { nullable: true })
      t.string('valmistusMaa')
      t.string('alue')
      t.int('vuosikerta')
      t.string('huomautus', { nullable: true })
      t.string('rypaleet', { nullable: true })
      t.string('luennehdinta')
      t.string('pakkausTyyppi')
      t.string('suljentaTyyppi')
      t.float('alkoholiProsentti')
      t.float('hapotGL')
      t.float('sokeriGL')
      t.float('energia100ML')
      t.string('Valikoima')
   },
})
