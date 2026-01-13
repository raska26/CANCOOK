import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const favorites = pgTable("favorites", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  
});
