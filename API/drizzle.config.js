import { ENV } from "./SRC/config/env";

export default {
  schema: "./SRC/db/schema.js",
  out: "./SRC/db/migrations",
  dialect: "postgresql",
  dbCredentials: { url: ENV.DATABASE_URL },
};
