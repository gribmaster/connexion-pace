import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

// Always reuse the global instance across module re-evaluations (dev hot-reload + prod).
// Without this, each re-evaluation opens a new PrismaClient consuming pool slots.
export const prisma =
  globalForPrisma.prisma ||
  (globalForPrisma.prisma = new PrismaClient())