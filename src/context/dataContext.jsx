'use client';

import { useState, createContext, useEffect } from 'react';

export const DataContext = createContext({
  coordinates: [0, 0],
  setCoordinates: () => {},
  data: [],
  setData: () => {},
});

export function DataContextProvider({ children }) {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [data, setData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [range, setRange] = useState(5);
  const [gpsError, setGpsError] = useState(false);

  const value = {
    coordinates,
    setCoordinates,
    data,
    setData,
    range,
    setRange,
    rawData,
    setRawData,
    gpsError,
    setGpsError,
  };

  const gpsHandler = ({ coords }) => {
    setGpsError(false);
    const { latitude, longitude } = coords;
    setCoordinates([latitude, longitude]);
  };

  const getGpsLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(gpsHandler, () => {
        setGpsError(true);
        setTimeout(getGpsLocation, 3000);
      });
    } catch (e) {
      setGpsError(true);
    }
    setTimeout(getGpsLocation, 10 * 60 * 1000);
  };

  useEffect(() => {
    getGpsLocation();
  }, []);

  return (
    <DataContext.Provider value={value}> {children} </DataContext.Provider>
  );
}
