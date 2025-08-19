import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: '¡Ingrese asignatura!'}),
  teachers: z.array(z.string()), // profesor ids 
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "¡Ingrese curso!" }),
  capacity: z.coerce.number().min(1, { message: "¡La capacidad es obligatoria!" }),
  gradeId: z.coerce.number().min(1, { message: "¡El curso es obligatorio!" }),
  supervisorId: z.coerce.string().optional(),
});

export type ClassSchema = z.infer<typeof classSchema>;