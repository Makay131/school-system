"use client";

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40
  },
  {
    name: 'Tue',
    present: 70,
    absent: 30
  },
  {
    name: 'Wed',
    present: 40,
    absent: 24
  },
  {
    name: 'Thu',
    present: 40,
    absent: 24
  },
  {
    name: 'Fri',
    present: 40,
    absent: 24
  },
];

const BarsChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-center">
            <h3 className='text-lg font-semibold'>Attendance</h3>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: 'lightgray'}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: '20px', paddingBottom: '40px'}}/>
          <Bar dataKey="present" fill="#fae27c" legendType='circle' radius={[10,10,0,0]} activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="absent" fill="#c3ebfa" legendType='circle' radius={[10,10,0,0]} activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarsChart