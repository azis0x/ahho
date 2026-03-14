import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import * as schema from "#/db/schema";

neonConfig.webSocketConstructor = ws;

type DB = ReturnType<typeof drizzle<typeof schema>>;

const globalForDb = globalThis as unknown as {
  db?: DB;
};

const sql = neon(process.env.DATABASE_URL!);
const db = globalForDb.db ?? drizzle({ client: sql, schema });

if (process.env.NODE_ENV === "development") globalForDb.db = db;

export { db };
