/* eslint-disable @typescript-eslint/ban-ts-comment */
import { compose, drop, prop, replace } from 'ramda'
import { readFile, utils } from 'xlsx'

const removePrefix = replace('Alkon hinnasto ', '')
const splitByDot = (str: string) => str.split('.')
const constructDate = (arr: Array<string>) => new Date(`${arr[2]}-${arr[1]}-${arr[0]}`)
//@ts-ignore
const getDate = compose(constructDate, splitByDot, removePrefix, prop('productId'))

export const readXlsx = async (fileName: string): Promise<any> => {
   const book = await readFile(fileName)
   const sheet = book.Sheets['Alkon Hinnasto Tekstitiedostona']
   const json: any = utils.sheet_to_json(sheet, {
      raw: true,
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
   const data = drop(3, json)
   return data.map((x: any) => ({
      ...x,
      //@ts-ignore
      date: getDate(json[0]),
      hinta: parseFloat(x.hinta),
      litraHinta: parseFloat(x.litraHinta),
   }))
}
