"use client";

import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 50,
    fill: '#fae27c',
  },
  {
    name: '25-29',
    count: 50,
    fill: '#c3ebfa',
  },
];

const RadialChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>Students</h3>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      <div className='w-full h-[75%] relative'>
      <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
      <div className='flex gap-16 justify-center'>
        <div className='flex flex-col gap-1'>
          <div className="w-5 h-5 bg-schoolify-sky rounded-full"></div>
          <h4 className='font-bold'>1,234</h4>
          <div className='text-xs text-gray-300'>Boys (%55)</div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className="w-5 h-5 bg-schoolify-yellow rounded-full"></div>
          <h4 className='font-bold'>1,234</h4>
          <div className='text-xs text-gray-300'>Girls (%45)</div>
        </div>
      </div>
    </div>
  )
}

export default RadialChart