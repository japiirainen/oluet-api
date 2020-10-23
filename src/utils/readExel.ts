import { readFile, utils } from 'xlsx'

export const readXlsx = async (fileName: string): Promise<any> => {
   const book = await readFile(fileName)
   const sheet = book.Sheets['Alkon Hinnasto Tekstitiedostona']
   return utils.sheet_to_json(sheet, {
      raw: true,
      range: 4,
      header: [
         'productId',
         'nimi',
         'valmistaja',
         'pulloKoko',
         'hinta',
         'litraHinta',
         'uutuus',
         'hinnastoJarjestysKoodi',
         'tyyppi',
         'alaTyyppi',
         'erityisryhma',
         'olutTyyppi',
         'valmistusMaa',
         'alue',
         'vuosikerta',
         'etikettimerkintoja',
         'huomautus',
         'rypaleet',
         'luennehdinta',
         'pakkausTyyppi',
         'suljentaTyyppi',
         'alkoholiProsentti',
         'hapotGL',
         'sokeriGL',
         'kantavierrep',
         'vari',
         'katkerot',
         'energia100ML',
         'valikoima',
         'EAN',
      ],
   })
}
