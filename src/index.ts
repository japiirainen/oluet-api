import { prisma } from './schema/context'
import { start, app } from './app'
import { dailyUpdate } from './schema/allTypes/Mutation'
import { Request, Response } from 'express'

app.post('/daily', async (_req: Request, res: Response) => {
   const data = await dailyUpdate(null, null, { prisma })
   res.writeHead(200, { 'Content-Type': 'application/json' })
   res.write(JSON.stringify(data))
   res.end()
})

start()
