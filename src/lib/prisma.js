import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { Pool } = pg;

/**
 * Singleton Prisma client using the pg driver adapter for stability on Windows/WSL.
 * Pattern mirrors the reference biometric project setup.
 */
const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const adapter = new PrismaPg(pool);

  globalForPrisma.prisma = new PrismaClient({ adapter });
}

export const db = globalForPrisma.prisma;
