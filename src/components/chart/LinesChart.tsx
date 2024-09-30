"use client";

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Mar',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Apr',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'May',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Jun',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Jul',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Aug',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Sep',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Oct',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Nov',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Dec',
    income: 4000,
    expense: 2400,
  },
];

const LinesChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-center">
            <h3 className='text-lg font-semibold'>Attendance</h3>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
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
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} tickMargin={15} />
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop: '10px', paddingBottom: '30px'}}/>
          <Line type="monotone" dataKey="income" stroke="#c3ebfa" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#cfceff" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LinesChart;