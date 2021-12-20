/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

export async function disconnect(): Promise<boolean> {
  await db.$disconnect()

  return true
}

export async function connect(): Promise<boolean> {
  await db.$connect()

  return true
}

export * from '@prisma/client'

export default db
