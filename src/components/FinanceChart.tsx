"use client";
import Image from "next/image";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  {
    name: 'Ene',
    Ausentes: 4000,
    Presentes: 2400,
  },
  {
    name: 'Feb',
    Ausentes: 3000,
    Presentes: 1398,
  },
  {
    name: 'Mar',
    Ausentes: 2000,
    Presentes: 9800,
  },
  {
    name: 'Abr',
    Ausentes: 2780,
    Presentes: 3908,
  },
  {
    name: 'May',
    Ausentes: 1890,
    Presentes: 4800,
  },
  {
    name: 'Jun',
    Ausentes: 2390,
    Presentes: 3800,
  },
  {
    name: 'Jul',
    Ausentes: 3490,
    Presentes: 4300,
  },
  {
    name: 'Ago',
    Ausentes: 3490,
    Presentes: 5800,
  },
  {
    name: 'Sep',
    Ausentes: 3990,
    Presentes: 4389,
  },
  {
    name: 'Oct',
    Ausentes: 3440,
    Presentes: 4300,
  },
    {
    name: 'Nov',
    Ausentes: 3420,
    Presentes: 4805,
  },
    {
    name: 'Dic',
    Ausentes: 3490,
    Presentes: 2300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/*TITULO*/}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Asistencia Anual</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
      </div>
      <ResponsiveContainer width="100%" height="90%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="ddd"/>
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tick={{fill:"#000000"}} 
          tickLine={false}
          tickMargin={10}
        />
        <YAxis 
          axisLine={false} 
          tick={{fill:"#000000"}} 
          tickLine={false}
          tickMargin={20}
        />
        <Tooltip />
        <Legend 
          align='center'
          verticalAlign='top'
          wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}
        /> 
        <Line 
          type="monotone" 
          dataKey="Ausentes" 
          stroke="#26B2FF" 
          activeDot={{ r: 8 }}
          strokeWidth={5}
        />
        <Line type="monotone" dataKey="Presentes" stroke="#0037E6" strokeWidth={5}/>
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;