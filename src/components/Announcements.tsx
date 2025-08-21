// Importa el cliente de Prisma para acceder a la base de datos
import prisma from "@/lib/prisma";
// Importa la función de autenticación de Clerk para obtener datos del usuario logueado
import { auth } from "@clerk/nextjs/server";

const Announcements = async () => {
  // Obtiene el ID del usuario y los "claims" (datos extras) de la sesión
  const { userId, sessionClaims } = auth();
  // Extrae el rol desde los metadatos de la sesión (admin, teacher, student, parent)
  const role = (sessionClaims?.metadata as { role?: string })?.role;

    // Condiciones de filtrado según el rol del usuario
  const roleConditions = {
    teacher: { lessons: { some: { teacherId: userId! } } },
    student: { students: { some: { id: userId! } } },
    parent: { students: { some: { parentId: userId! } } },
  };
   // Consulta a la tabla "announcement" en la base de datos
  const data = await prisma.announcement.findMany({
    take: 3,
    orderBy: { date: "desc" },
    where: {
      ...(role !== "admin" && {
        OR: [
          { classId: null },
          { class: roleConditions[role as keyof typeof roleConditions] || {} },
        ],
      }),
    },
  });


  // Renderiza el componente en pantalla
  // - Muestra hasta 3 anuncios, cada uno con fondo distinto
  // - Incluye título, fecha formateada (Chile) y descripción
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-[#00194F] font-semibold my-4">Anuncios</h1>
        <span className=" text-xs text-gray-400">Ver todo</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {data[0] && (<div className="bg-[#E9F7FF] rounded-md p-4">
          <div className=" flex items-center justify-between">
            <h2 className="font-medium text-[#00194F]">{data[0].title}</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {new Intl.DateTimeFormat("es-CL").format(data[0].date)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{data[0].description}</p>
        </div>)}
        {data[1] && ( <div className="bg-[#CEECFF] rounded-md p-4">
          <div className=" flex items-center justify-between">
            <h2 className="font-medium text-[#00194F]">{data[1].title}</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {new Intl.DateTimeFormat("es-CL").format(data[1].date)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{data[1].description}</p>
        </div>)}
        {data[2] && ( <div className="bg-[#A7E0FF] rounded-md p-4">
          <div className=" flex items-center justify-between">
            <h2 className="font-medium text-[#00194F]">{data[2].title}</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {new Intl.DateTimeFormat("es-CL").format(data[2].date)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{data[2].description}</p>
        </div>)}
      </div>
    </div>
  );
};

export default Announcements;
