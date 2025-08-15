import { DictionaryShape } from "../types";

export const en = {
  roles: { ADMIN: "Administrator", TEACHER: "Teacher", STUDENT: "Student", PARENT: "Guardian" },
  enums: {
    sexoUsuario: { MASCULINO: "Male", FEMENINO: "Female" },
    dia: { LUNES: "Monday", MARTES: "Tuesday", MIERCOLES: "Wednesday", JUEVES: "Thursday", VIERNES: "Friday" },
  },
  campos: {
    id: "ID", usuario: "Username", nombre: "First name", apellido: "Last name", correo: "Email",
    telefono: "Phone", direccion: "Address", imagen: "Image", tipoSangre: "Blood type",
    sexo: "Sex", creadoEn: "Created at", nacimiento: "Birth date", nivel: "Level",
    capacidad: "Capacity", titulo: "Title", descripcion: "Description", inicio: "Start",
    fin: "End", presente: "Attendance", puntaje: "Score", vencimiento: "Due date",
    dia: "Day",
  },
  entidades: {
    administrador: "Administrator", docente: "Teacher", estudiante: "Student", apoderado: "Guardian",
    grado: "Grade", curso: "Class", asignatura: "Subject", leccion: "Lesson", prueba: "Exam",
    tarea: "Assignment", resultado: "Result", asistencia: "Attendance", evento: "Event", anuncio: "Announcement",
  },
  ui: { idioma: "Language", guardar: "Save", cancelar: "Cancel" },
} satisfies DictionaryShape;