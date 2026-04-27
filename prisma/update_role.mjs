import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "dotenv/config";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.tipos_integrantes.updateMany({
    where: { tipo_integrante: "Representante Legal" },
    data: { tipo_integrante: "Representante Principal" },
  });
  console.log("Updated role name successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
