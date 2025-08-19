import Announcements from "@/components/Announcements";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* DERECHA */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/*TARJETA DE USUARIO*/}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* GRAFICOS MEDIO*/}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/*GRAFICO CIRCULAR*/}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* TABLA DE ASISTENCIA*/}
          <div className="w-full lg:w-2/3 h-[450px] ">
            <AttendanceChartContainer />
          </div>
        </div>

        {/* GRAFICO BAJO*/}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* IZQUIERDA */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
