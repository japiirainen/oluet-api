import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

export const PORT = process.env.PORT || 5555
export const ALKO_FILE = path.join(__dirname, '..', 'data', 'alkon-hinnasto-tekstitiedostona.xlsx')
