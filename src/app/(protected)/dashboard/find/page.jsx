'use client';

import { useEffect, useContext, useState } from 'react';
import { DataContext } from '@/context/dataContext';
import Card from '@/components/Card';
import { getFoodData } from '@/appwrite/db';
import { v4 as uuidv4 } from 'uuid';
import { calculateDistance } from '@/utils/utils';

export default function Find() {
  const { menu } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  const { range, data, setData, coordinates, rawData, setRawData, gpsError } =
    useContext(DataContext);

  // Get Items within the range. If failed, try again in after 3 seconds
  const fetchData = async () => {
    try {
      const { documents } = await getFoodData(coordinates[0], coordinates[1]);
      setRawData(documents);
    } catch (error) {
      setTimeout(fetchData, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Doesn't call the function if coordinates are 0,0 (default value which is middle of a ocean)
    if (JSON.stringify(coordinates) === JSON.stringify([0, 0])) return;
    fetchData();
  }, [coordinates]);

  // filtes data based on the range the user has selected
  useEffect(() => {
    const formatedData = rawData.filter((data) => {
      const { gpsLatitude, gpsLongitude } = data;

      return (
        calculateDistance(
          gpsLatitude,
          gpsLongitude,
          coordinates[0],
          coordinates[1]
        ) <= Number(range)
      );
    });

    setData(formatedData);
  }, [range, rawData]);

  // Show this when GPS is not availabe
  if (gpsError)
    return (
      <div>
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! This Application cannot run without GPS</span>
        </div>
      </div>
    );
  // Next.js approuter is slow and this hides the Card components during path change
  else if (menu !== 'find') return <></>;
  else if (loading)
    return <span className="mt-5 loading loading-spinner loading-lg"></span>;
  else if (!data.length)
    return <div className="p-4 text-xl">No one is providing in your area.</div>;

  return (
    <section>
      {data.map((itemInfo) => (
        <Card key={uuidv4()} data={itemInfo} />
      ))}
    </section>
  );
}
