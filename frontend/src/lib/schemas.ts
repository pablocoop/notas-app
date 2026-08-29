import { z } from "zod";
export const asignaturaSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    creditos: z.number(),
    notaMaxima: z.number().default(20),
});