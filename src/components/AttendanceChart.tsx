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

const AttendanceChart = ({
  data,
}:{
  data:{name:string, present:number, adsent:number}[];
}) => {
  return (
    /*GRAFICO DE BARRAS*/
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
  );
};

export default AttendanceChart;