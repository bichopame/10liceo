import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id:number;
  name:string;
  email?: string,
  students: string[];
  phone:string;
  address: string;
}

const columns =[
  {
    header:"Info", 
    accessor:"info",
  },
  {
    header:"Nombres estudiantes",
    accessor:"students",
    className:"hidden md:table-cell",
  },
  {
    header:"Telefono",
    accessor:"phone",
    className:"hidden lg:table-cell",
  },
  {
    header:"Dirección",
    accessor:"address",
    className:"hidden lg:table-cell",
  },
  {
    header:"Acción",
    accessor:"action",
  },
];

const ParentListPage = ()=>{
  
  const renderRow =(item:Parent)=>(
    <tr key={item.id} className="border-b border-gray-300 even:bg-slate-100 text-sm hover:bg-[#CEECFF]">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-600">{item?.email}</p>
        </div>  
      </td>
      <td className="hidden md:table-cell">{item.students.join(", ")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          
            {role === "admin" &&(
              <>
                <FormModal table="parent" type="update" data={item}/>
                <FormModal table="parent" type="delete" id={item.id}/>
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
        <h1 className="hidden md:block text-lg font-semibold text-[#00194F]">Lista de Apoderados</h1>
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
              <FormModal table="parent" type="create"/>
            )}
          </div>
        </div>
      </div>

      {/*LISTA*/}
      <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      {/*PAGINACION*/}
      <Pagination/>
    </div>
  )
}

export default ParentListPage;