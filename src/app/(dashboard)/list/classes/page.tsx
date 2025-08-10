import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Class = {
  id:number;
  name:string;
  capacity: number;
  grade: number;
  supervisor:string;
  };

const columns =[
  {
    header:"Clases", 
    accessor:"name",
  },
  {
    header:"Capacidad",
    accessor:"capacity",
    className:"hidden md:table-cell",
  },
  {
    header:"Curso",
    accessor:"grade",
    className:"hidden md:table-cell",
  },
  {
    header:"Supervisor",
    accessor:"supervisor",
    className:"hidden md:table-cell",
  },
  {
    header:"Acción",
    accessor:"action",
  },
];

const ClasseListPage = ()=>{
  
  const renderRow =(item:Class)=>(
    <tr key={item.id} className="border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-[#CEECFF]">
      
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
            {role === "admin" &&(
              <>
                <FormModal table="class" type="update" data={item.id}/>
                <FormModal table="class" type="delete" id={item.id}/>
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
        <h1 className="hidden md:block text-lg font-semibold text-[#00194F]">Lista de Clases</h1>
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
              <FormModal table="class" type="create"/>
            )}
          </div>
        </div>
      </div>

      {/*LISTA*/}
      <Table columns={columns} renderRow={renderRow} data={classesData}/>
      {/*PAGINACION*/}
      <Pagination/>
    </div>
  )
}

export default ClasseListPage;