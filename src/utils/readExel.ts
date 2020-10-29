/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Juoma } from '@prisma/client'
import { compose, drop, prop, replace } from 'ramda'
import { readFile, utils } from 'xlsx'

const removePrefix = replace('Alkon hinnasto ', '')
const splitByDot = (str: string) => str.split('.')
const constructDate = (arr: Array<string>) => new Date(`${arr[2]}-${arr[1]}-${arr[0]}`)
//@ts-ignore
const getDate = compose(constructDate, splitByDot, removePrefix, prop('productId'))

export const readXlsx = async (fileName: string): Promise<Juoma[]> => {
   const book = await readFile(fileName)
   const sheet = book.Sheets['Alkon Hinnasto Tekstitiedostona']
   const json: Juoma[] = utils.sheet_to_json(sheet, {
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
   console.log(json[0])
   return data.map((x: Juoma) => ({
      ...x,
      //@ts-ignore
      date: getDate(json[0]),
      //@ts-ignore
      hinta: parseFloat(x.hinta),
      //@ts-ignore
      litraHinta: parseFloat(x.litraHinta),
   }))
}
