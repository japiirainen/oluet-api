import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

export const PORT = process.env.PORT || 5000
export const ALKO_FILE = path.join(__dirname, '..', 'data', 'alkon-hinnasto-tekstitiedostona.xlsx')
export const ALKO_URI =
   'https://www.alko.fi/INTERSHOP/static/WFS/Alko-OnlineShop-Site/-/Alko-OnlineShop/fi_FI/Alkon%20Hinnasto%20Tekstitiedostona/alkon-hinnasto-tekstitiedostona.xlsx'

export const DESTINATION_LOC = path.join(__dirname, '..', 'data')
