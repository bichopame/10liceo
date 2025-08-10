import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id:number;
  title:string;
  class: string;
  date:string;
  startTime:string;
  endTime:string;
  };

const columns =[
  {
    header:"Titulo", 
    accessor:"title",
  },
  {
    header:"Clase",
    accessor:"class",
  },
  {
    header:"Fecha",
    accessor:"date",
    className:"hidden md:table-cell",
  },
   {
    header:"Hora de Inicio",
    accessor:"startTime",
    className:"hidden md:table-cell",
  },
   {
    header:"Hora de Termino",
    accessor:"endTime",
    className:"hidden md:table-cell",
  },
  {
    header:"Acción",
    accessor:"action",
  },
];

const EventListPage = ()=>{
  
  const renderRow =(item: Event)=>(
    <tr key={item.id} className="border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-[#CEECFF]">
      
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
            {role === "admin" &&(
              <>
                <FormModal table="event" type="update" data={item.id}/>
                <FormModal table="event" type="delete" id={item.id}/>
              </>
            )}
        </div>
      </td>
    </tr>
  );




  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*ARRIBA*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-[#00194F]">Eventos</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#A7E0FF]">
              <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#A7E0FF]">
              <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>
            {role === "admin" && (
              <FormModal table="event" type="create"/>
            )}
          </div>
        </div>
      </div>

      {/*LISTA*/}
      <Table columns={columns} renderRow={renderRow} data={eventsData}/>
      {/*PAGINACION*/}
      <Pagination/>
    </div>
  )
}

export default EventListPage;