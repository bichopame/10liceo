import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
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
            src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="" 
            width={144} 
            height={144} 
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>
        <div className="w-2/3 flex-col justify-between gap-4">
          <h1 className="text-xl font-semibold">Maria Rojas Gonzalez</h1>
          <p className="text-sm text-gray-600 p-1">
            Estudiante de 6A enseñanza basica. 
          </p>
          <div className="p-1 flex items justify-between gap-2 flex-wrap text-xs font-medium">
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/phone.png" alt="" width={14} height={14}/>
              <span>+56912345678</span>
            </div>
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/date.png" alt="" width={14} height={14}/>
              <span>Julio 2025</span>
            </div>
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/mail.png" alt="" width={14} height={14}/>
              <span>pedroperez@colegio.cl</span>
            </div>
            <div className="w-ful md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/blood.png" alt="" width={14} height={14}/>
              <span>A+</span>
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
              <h1 className="text-xl font-semibold">6 Basico</h1>
              <span className="text-sm text-gray-400">Grado</span>
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
              <h1 className="text-xl font-semibold">18</h1>
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
              <h1 className="text-xl font-semibold">6A</h1>
              <span className="text-sm text-gray-400">Curso</span>
            </div>
          </div>
        </div>
      </div>
      {/*ABAJO*/}
      <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
        <h1>Horario Estudiante</h1>
        <BigCalendar/>
      </div>
      </div>
      {/*IZQUIERDA*/}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Atajos</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          <Link className="p-3 rounded-md bg-lime-300" href={`/list/lessons?classId=${2}`}>
          Lecciones
          </Link>
          <Link className="p-3 rounded-md bg-teal-300" href={`/list/teachears?classId=${2}`}>
          Profesores
          </Link>
          <Link className="p-3 rounded-md bg-yellow-300" href={`/list/exams?classId=${2}`}>
          Examenes
          </Link>
          <Link className="p-3 rounded-md bg-orange-300" href={`/list/assignments?classId=${2}`}>
          ??????????
          </Link>
          <Link className="p-3 rounded-md bg-green-300" href={`/list/results?studentId=${"student2"}`}>
          Resultados
          </Link>
        </div>

      </div>
      <Performance/>
      <Announcements/>
      </div>
    </div>
  )
}

export default SingleStudentPage;