export type Lang = "es" | "en";

export type RolKey  = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
export type SexoKey = "MASCULINO" | "FEMENINO";
export type DiaKey  = "LUNES" | "MARTES" | "MIERCOLES" | "JUEVES" | "VIERNES";

export type DictionaryShape = {
  roles: Record<RolKey, string>;
  enums: {
    sexoUsuario: Record<SexoKey, string>;
    dia: Record<DiaKey, string>;
  };
  campos: {
    id: string;
    usuario: string;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    direccion: string;
    imagen: string;
    tipoSangre: string;
    sexo: string;
    creadoEn: string;
    nacimiento: string;
    nivel: string;
    capacidad: string;
    titulo: string;
    descripcion: string;
    inicio: string;
    fin: string;
    presente: string;
    puntaje: string;
    vencimiento: string;
    dia: string;
  };
  entidades: {
    administrador: string;
    docente: string;
    estudiante: string;
    apoderado: string;
    grado: string;
    curso: string;
    asignatura: string;
    leccion: string;
    prueba: string;
    tarea: string;
    resultado: string;
    asistencia: string;
    evento: string;
    anuncio: string;
  };
  ui: {
    idioma: string;
    guardar: string;
    cancelar: string;
  };
};