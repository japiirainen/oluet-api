import Excel, { Workbook } from 'exceljs'
import { ALKO_FILE } from './constants'
import { tryCatch, TaskEither } from 'fp-ts/lib/TaskEither'
import { toError } from 'fp-ts/lib/Either'

const workbook = new Excel.Workbook()

export const readXlsx = (path: string): TaskEither<Error, Workbook> =>
   tryCatch(() => workbook.xlsx.readFile(path), toError)

readXlsx(ALKO_FILE)().then(console.error, console.log)
