import fs from "fs";
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

async function importSql(filePath) {
  const sql = fs.readFileSync(filePath, "utf8");
  
  // Extract only the INSERT INTO statements to avoid structure creation errors
  // since Prisma already created the tables
  const insertMatches = sql.match(/INSERT INTO `[^`]+` \([^)]+\) VALUES[\s\S]+?;/g);
  
  if (!insertMatches) {
    console.log(`No inserts found in ${filePath}`);
    return;
  }

  for (let insertStmt of insertMatches) {
    // Convert MySQL backticks to Postgres double quotes
    let pgSql = insertStmt.replace(/`/g, '"');
    
    console.log(`Executing insert from ${filePath} (length: ${pgSql.length} chars)`);
    await prisma.$executeRawUnsafe(pgSql);
  }
}

async function main() {
  console.log("Importing paises.sql...");
  await importSql("./paises.sql");
  
  console.log("Importing estados.sql...");
  await importSql("./estados.sql");
  
  console.log("Done importing SQL data.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
