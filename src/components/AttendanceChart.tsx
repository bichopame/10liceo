"use client"
import Image from 'next/image';
import { 
  BarChart, 
  Bar, 
  Rectangle, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  {
    name: 'Lun',
    Ausentes: 40,
    Presentes: 60,
    
  },
  {
    name: 'Mar',
    Ausentes: 60,
    Presentes: 70,
    
  },
  {
    name: 'Mie',
    Ausentes: 75,
    Presentes: 90,
    
  },
  {
    name: 'Jue',
    Ausentes: 75,
    Presentes: 90,
    
  },
  {
    name: 'Vie',
    Ausentes: 55,
    Presentes: 65,
    
  },
];

const AttendanceChart =() => {
  return (
    <div className="bg-white rounded-xl h-full p-4">
      <div className="flex justify-between items-center">
        {/*TITULO*/}
        <h1 className="text-lg font-semibold">Asistencia</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
      </div>
        {/*GRAFICO DE BARRAS*/}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#808085"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#808085"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend 
            align='left'
            verticalAlign='top'
            wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}
            />
          <Bar 
          dataKey="Ausentes" 
          fill="#0037E6" 
          legendType='circle'
          radius={[10,10,0,0]}
          />
          <Bar 
          dataKey="Presentes" 
          fill="#26B2FF" 
          legendType='circle'
          radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart