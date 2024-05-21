import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, serial, text } from "drizzle-orm/pg-core";

// ===========================================================================
// OBJECT CATEGORIES
// ===========================================================================
export const objectTypeEnum = pgEnum("object_type", ["org", "place"]);
export const optionsNumberEnum = pgEnum("options_number", ["one", "many"]);

export const section = pgTable("section", {
  id: serial("id").primaryKey(),
  name_plural: text("name_plural").notNull(),
  name_singular: text("name_singular").notNull(),
  object_type: objectTypeEnum("object_type").notNull(),
})

export const spec = pgTable("spec", {
  id: serial("id").primaryKey(),
  name_service: text("name_service").notNull(),
  name_public: text("name_public").notNull(),
  object_type: objectTypeEnum("object_type").notNull(),
  options_number: optionsNumberEnum("options_number").notNull(),
})

export const specRelations = relations(spec, ({many}) => ({
  option: many(option),
}))

export const option = pgTable("option", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  spec_id: integer("spec_id").notNull().references(() => spec.id),
  order: integer("order").notNull(),
})