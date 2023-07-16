'use client';

import { useState } from 'react';
import Card from '@/components/Card';

export default function Find() {
  const [range, setRange] = useState(5);
  return (
    <>
      <section className="container">
        <div className="bg-white items-center w-fit m-2 grid grid-cols-5 gap-1 p-1 pl-2 pr-2 rounded-3xl mx-auto">
          <span className=" text-mejbaan font-semibold pr-2">Distance:</span>
          <span className="text-mejbaan font-bold pr-2">{`${range} KM`}</span>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={range}
            className="range range-accent-focus col-span-3"
            onChange={(e) => {
              const { value } = e.target;
              setRange(value);
              console.log(value);
            }}
          />
        </div>
      </section>
      <section>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
