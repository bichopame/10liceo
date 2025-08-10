import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";


const AdminPage =() => {
  return (
    <div className= "p-4 flex gap-4 flex-col md:flex-row">
      {/* DERECHA */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/*TARJETA DE USUARIO*/}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="Estudiantes"/>
        <UserCard type="Profesores"/>
        <UserCard type="Apoderados"/>
        <UserCard type="Staff"/>
      </div>
      {/* GRAFICOS MEDIO*/}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/*GRAFICO CIRCULAR*/}
        <div className="w-full lg:w-1/3 h-[450px]">
        <CountChart/>
        </div>
        {/* TABLA DE ASISTENCIA*/}
        <div className="w-full lg:w-2/3 h-[450px] ">
        <AttendanceChart/>
        </div>       
      </div>
      
      {/* GRAFICO BAJO*/}
      <div className="w-full h-[500px]">
        <FinanceChart/>
      </div>
      </div>
      {/* IZQUIERDA */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Announcements/>
      </div>
      </div>
  )
}

export default AdminPage;