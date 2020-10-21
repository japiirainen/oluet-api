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

const formatXlsx = async (path: string) => {
    const fileContents = await readXlsx(path)
    if (!fileContents) {
        console.error('reading file failed')
        return
    } else {
       return {
        created: fileContents.created,
        nimi: "joona"
    }
}
}

const res = formatXlsx(ALKO_FILE)
console.log(res)

