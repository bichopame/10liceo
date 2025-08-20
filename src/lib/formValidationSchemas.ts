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

export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: '¡El nombre de usuario debe tener al menos 3 caracteres!'})
    .max(20, { message: '¡El nombre de usuario debe tener máximo 20 caracteres!'}),
  password:z
    .string()
    .min(8, { message: '¡La contraseña debe tener al menos 8 caracteres!'})
    .optional()
    .or(z.literal("")),
  name:z.string().min(1, { message: '¡Debe registrar nombre!'}),
  surname:z.string().min(1, { message: '¡Debe registrar apellidos!'}),
  email:z
    .string()
    .email({ message:"Correo electrónico no válido"})
    .optional()
    .or(z.literal("")),
  phone:z.string().optional(),
  address:z.string(),
  img:z.string().optional(),
  bloodType:z.string().min(1, { message: '¡Debe registrar tipo de sangre!'}),
  birthday:z.coerce.date({ message: '¡Debe registrar fecha de nacimiento!'}),
  sex:z.enum(["MALE","FEMALE"],{ message: '¡Debe registrar genero!'}),
    subjects: z.array(z.string()).optional(), // subject ids
});

export type TeacherSchema = z.infer<typeof teacherSchema>;

export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "¡El nombre de usuario debe tener al menos 3 caracteres!" })
    .max(20, { message: "¡El nombre de usuario debe tener máximo 20 caracteres!" }),
  password: z
    .string()
    .min(8, { message: "¡La contraseña debe tener al menos 8 caracteres!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "¡Debe registrar nombre!" }),
  surname: z.string().min(1, { message: "¡Debe registrar apellidos!" }),
  email: z
    .string()
    .email({ message: "Correo electrónico no válido" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "¡Debe registrar tipo de sangre!" }),
  birthday: z.coerce.date({ message: "¡Debe registrar fecha de nacimiento!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "¡Debe registrar genero!" }),
  gradeId: z.coerce.number().min(1, { message: "¡Debe registrar el curso!" }),
  classId: z.coerce.number().min(1, { message: "¡Debe registrar la clase!" }),
  parentId: z.string().min(1, { message: "¡Se requiere identificación de los padres!" }),
});

export type StudentSchema = z.infer<typeof studentSchema>;

export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: "¡El nombre del título es obligatorio!" }),
  startTime: z.coerce.date({ message: "¡Se requiere hora de inicio!" }),
  endTime: z.coerce.date({ message: "¡Se requiere la hora del final!" }),
  lessonId: z.coerce.number({ message: "¡Se requiere lección!" }),
});

export type ExamSchema = z.infer<typeof examSchema>;

