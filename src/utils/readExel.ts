import Excel, { Workbook } from 'exceljs'
import { ALKO_FILE } from './constants'

const workbook = new Excel.Workbook()

export const readXlsx = async (path: string): Promise<Workbook | void> => {
   try {
      const file = await workbook.xlsx.readFile(path)
      return file
   } catch (e) {
      console.error(e)
   }
}

console.log(readXlsx(ALKO_FILE).then(console.log))
