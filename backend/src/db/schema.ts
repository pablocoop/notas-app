import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";

export const notas = sqliteTable("notas", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    asignaturaId: integer("asignaturaId").notNull(),
    tipoNota: text("tipoNota").notNull(),
    valor: real("valor").notNull(),
    peso: real("peso").notNull(),
    fecha: text("fecha").notNull(),
});