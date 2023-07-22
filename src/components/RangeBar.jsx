'use client';

import { DataContext } from '@/context/dataContext';
import { useContext } from 'react';

// Shows a slider to adjust range (KM)

export default function RangeBar() {
  const { range, setRange } = useContext(DataContext);
  return (
    <section className="flex justify-center sticky top-0">
      <div className="bg-white items-center w-screen sm:max-w-screen-sm m-2 flex gap-2 p-1 pl-2 pr-2 rounded-3xl shadow-xl">
        <span className=" text-mejbaan font-semibold">Distance:</span>
        <span className="text-mejbaan font-bold whitespace-nowrap">{`${range} KM`}</span>

        <input
          type="range"
          min="1"
          max="20"
          step="1"
          value={range}
          className="range range-accent-focus w-5/6 pl-2"
          onChange={(e) => {
            const { value } = e.target;
            setRange(value);
          }}
        />
      </div>
    </section>
  );
}
