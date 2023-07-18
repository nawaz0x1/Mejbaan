'use client';

import { useState } from 'react';
import Menubar from '@/components/Menubar';
import { DataContextProvider } from '@/context/dataContext';

export default function Dashboard({ find, map, provide }) {
  const [menu, setMenu] = useState('find');

  let item;
  if (menu === 'find') item = find;
  else if (menu === 'map') item = map;
  else item = provide;

  return (
    <>
      <Menubar menu={menu} setMenu={setMenu} />
      <main className="flex flex-col items-center">
        <DataContextProvider>{item}</DataContextProvider>
      </main>
    </>
  );
}
