import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import FormContainer from "@/components/FormContainer";
import Performance from "@/components/Performance";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleTeacherPage = async ({ 
  params: {id},
}: {
  params: {id: string };
}) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const teacher:
    | (Teacher & {
        _count: { subjects: number; lessons: number; classes: number };
      })
    | null = await prisma.teacher.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          subjects: true,
          lessons: true,
          classes: true,
        },
      },
    },
  });

  if (!teacher){
    return notFound();
  }

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/*DERECHA*/}
      <div className="w-full xl:w-2/3">
      {/*ARRIBA*/}
      <div className="flex flex-col lg:flex-row gap-4">

      {/*TARJETA INFO PROFESOR*/}
      <div className="bg-[#A7E0FF] py-6 px-4 rounded-md flex-1 flex gap-4">
        <div className="w-1/3">
          <Image 
            src={teacher.img || "/noAvatar.png"}
            alt="" 
            width={144} 
            height={144} 
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>
        <div className="w-2/3 flex-col justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">
              {teacher.name + " " + teacher.surname}
            </h1>
            {role === "admin" && (
            <FormContainer
              table="teacher"
              type="update"
              data={teacher}
            />
            )}
          </div>
          <p className="text-sm text-gray-600 p-1">
            Profesor de Ciencias en la Universidad Andrés Bello, Mg en ciencias. 
          </p>
          <div className="p-1 flex items justify-between gap-2 flex-wrap text-xs font-medium">
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/phone.png" alt="" width={14} height={14}/>
              <span>{teacher.phone || "-"}</span>
            </div>
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/date.png" alt="" width={14} height={14}/>
              <span>{new Intl.DateTimeFormat("es-CL").format(teacher.birthday)}</span>
            </div>
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/mail.png" alt="" width={14} height={14}/>
              <span>{teacher.email || "-"}</span>
            </div>
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/blood.png" alt="" width={14} height={14}/>
              <span>{teacher.bloodType}</span>
            </div>
          </div>
        </div>
      </div>

      {/*TARJETA PEQUEÑO*/}
      <div className="flex-1 flex gap-4 justify-between flex-wrap">
          {/*1 TARJETA*/}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image 
              src="/singleAttendance.png" 
              alt="" 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Asistencia</span>
              </div>
          </div>
          {/*2 TARJETA*/}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image 
              src="/singleBranch.png" 
              alt="" 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
            <div className="">
              <h1 className="text-xl font-semibold">{teacher._count.subjects}</h1>
              <span className="text-sm text-gray-400">Branches</span>
            </div>
          </div>
          {/*3TARJETA*/}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image 
              src="/singleLesson.png" 
              alt="" 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
            <div className="">
              <h1 className="text-xl font-semibold">{teacher._count.lessons}</h1>
              <span className="text-sm text-gray-400">Lesiones</span>
            </div>
          </div>
          {/*4TARJETA*/}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image 
              src="/singleClass.png" 
              alt="" 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
            <div className="">
              <h1 className="text-xl font-semibold">{teacher._count.classes}</h1>
              <span className="text-sm text-gray-400">Clases</span>
            </div>
          </div>
        </div>
      </div>
      {/*ABAJO*/}
      <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
        <h1>Horario Profesor</h1>
        <BigCalendarContainer type="teacherId" id={teacher.id} />
      </div>
      </div>
      {/*IZQUIERDA*/}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Atajos</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          <Link className="p-3 rounded-md bg-lime-300" href={`/list/classes?superviseId=${"teacher2"}`}>
          Clases
          </Link>
          <Link className="p-3 rounded-md bg-teal-300" href={`/list/students?teacherId=${"teacher2"}`}>
          Estudiantes
          </Link>
          <Link className="p-3 rounded-md bg-orange-300" href={`/list/lessons?teacherId=${"teacher2"}`}>
          Lecciones
          </Link>
          <Link className="p-3 rounded-md bg-yellow-300" href={`/list/exams?teacherId=${"teacher2"}`}>
          Examenes
          </Link>
          <Link className="p-3 rounded-md bg-green-300" href={`/list/assignments?teacherId=${"teacher2"}`}>
          Asistencia
          </Link>
        </div>

      </div>
      <Performance/>
      <Announcements/>
      </div>
    </div>
  )
}

export default SingleTeacherPage;