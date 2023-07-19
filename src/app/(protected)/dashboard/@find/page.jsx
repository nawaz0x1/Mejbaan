'use client';

import { useEffect, useState, useContext } from 'react';
import { DataContext } from '@/context/dataContext';
import Card from '@/components/Card';
import { getFoodData } from '@/appwrite/db';
import { v4 as uuidv4 } from 'uuid';
import { calculateDistance } from '@/utils/utils';

export default function Find() {
  const [gpsError, setGpsError] = useState(false);

  const {
    range,
    setRange,
    data,
    setData,
    coordinates,
    setCoordinates,
    rawData,
    setRawData,
  } = useContext(DataContext);

  const fetchData = async () => {
    const { documents } = await getFoodData(coordinates[0], coordinates[1]);
    setRawData(documents);
  };

  let watchID = null;
  const gpsHandler = ({ coords }) => {
    const { latitude, longitude } = coords;
    if (
      calculateDistance(latitude, latitude, coordinates[0], coordinates[1]) >
      0.1
    )
      setCoordinates([latitude, longitude]);
  };

  const getGpsLocation = () => {
    try {
      watchID = navigator.geolocation.watchPosition(gpsHandler, () => {
        setTimeout(getGpsLocation, 1000);
      });
    } catch (e) {
      setGpsError(true);
    }
  };

  useEffect(() => {
    getGpsLocation();
    return () => {
      if (watchID) navigator.geolocation.clearWatch(watchID);
      setGpsError(false);
    };
  }, []);

  useEffect(() => {
    if (coordinates[0] === 0 && coordinates[1] === 0) return;
    console.log('fetching data');
    fetchData();
  }, [coordinates]);

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
            }}
          />
        </div>
      </section>
      <section>
        {data.map((itemInfo) => (
          <Card key={uuidv4()} data={itemInfo} />
        ))}
      </section>
    </>
  );
}
