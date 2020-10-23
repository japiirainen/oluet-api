import { readFile, utils } from 'xlsx'

export const readXlsx = async (fileName: string): Promise<unknown> => {
   const book = await readFile(fileName)
   const sheet = book.Sheets['Alkon Hinnasto Tekstitiedostona']
   return utils.sheet_to_json(sheet, {
      raw: true,
      header: [
         'id',
         'created',
         'nimi',
         'valmistaja',
         'pullokoko',
         'hinta',
         'litrahinta',
         'tyyppi',
         'alaTyyppi',
         'olutTyyppi',
         'valmistusMaa',
         'alue',
         'vuosikerta',
         'huomautus',
         'rypaleet',
         'luonnehdinta',
         'pakkausTyyppi',
         'suljentaTyyppi',
         'alkoholiProsentti',
         'alkoholiProsenti',
         'hapotGL',
         'sokeriGL',
         'energia100ML',
         'valikoima',
      ],
   })
}
