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

  const value = {
    coordinates,
    setCoordinates,
    data,
    setData,
    range,
    setRange,
    rawData,
    setRawData,
  };

  return (
    <DataContext.Provider value={value}> {children} </DataContext.Provider>
  );
}
