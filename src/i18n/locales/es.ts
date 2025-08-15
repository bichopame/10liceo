import { DictionaryShape } from "../types";

export const es = {
  roles: { ADMIN: "Administrador", TEACHER: "Docente", STUDENT: "Estudiante", PARENT: "Apoderado" },
  enums: {
    sexoUsuario: { MASCULINO: "Masculino", FEMENINO: "Femenino" },
    dia: { LUNES: "Lunes", MARTES: "Martes", MIERCOLES: "Miércoles", JUEVES: "Jueves", VIERNES: "Viernes" },
  },
  campos: {
    id: "ID", usuario: "Usuario", nombre: "Nombre", apellido: "Apellido", correo: "Correo electrónico",
    telefono: "Teléfono", direccion: "Dirección", imagen: "Imagen", tipoSangre: "Tipo de sangre",
    sexo: "Sexo", creadoEn: "Fecha de creación", nacimiento: "Fecha de nacimiento", nivel: "Nivel",
    capacidad: "Capacidad", titulo: "Título", descripcion: "Descripción", inicio: "Fecha de inicio",
    fin: "Fecha de término", presente: "Asistencia", puntaje: "Puntaje", vencimiento: "Fecha de vencimiento",
    dia: "Día",
  },
  entidades: {
    administrador: "Administrador", docente: "Docente", estudiante: "Estudiante", apoderado: "Apoderado",
    grado: "Grado", curso: "Curso", asignatura: "Asignatura", leccion: "Lección", prueba: "Prueba",
    tarea: "Tarea", resultado: "Resultado", asistencia: "Asistencia", evento: "Evento", anuncio: "Anuncio",
  },
  ui: { idioma: "Idioma", guardar: "Guardar", cancelar: "Cancelar" },
} satisfies DictionaryShape;