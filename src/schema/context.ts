import { PrismaClient } from '@prisma/client'

export interface Context {
   prisma: PrismaClient
}

export const createContext = (): Context => ({ prisma })
export const prisma = new PrismaClient()
