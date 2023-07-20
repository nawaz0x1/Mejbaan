'use client';

import { useEffect, useState } from 'react';
import Menubar from '@/components/Menubar';
import { DataContextProvider } from '@/context/dataContext';
import { useRouter } from 'next/navigation';

export default function Dashboard({ children }) {
  const router = useRouter();
  const [menu, setMenu] = useState('find');

  useEffect(() => {
    const route = `/dashboard/${menu}`;
    router.push(route);
  }, [menu]);

  return (
    <>
      <Menubar menu={menu} setMenu={setMenu} />
      <main className="flex flex-col items-center">
        <DataContextProvider>{children}</DataContextProvider>
      </main>
    </>
  );
}
