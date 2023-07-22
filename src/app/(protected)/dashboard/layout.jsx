'use client';

import { useContext, useEffect, useState } from 'react';
import Menubar from '@/components/Menubar';
import { DataContext } from '@/context/dataContext';
import { useRouter } from 'next/navigation';
import RangeBar from '@/components/RangeBar';

export default function Dashboard({ children }) {
  const router = useRouter();
  const { menu } = useContext(DataContext);

  // Switches between the Find and Provide page
  useEffect(() => {
    const route = `/dashboard/${menu}`;
    router.push(route);
  }, [menu]);

  return (
    <>
      <Menubar />
      {menu === 'find' && <RangeBar />}
      <main className="flex flex-col items-center">{children}</main>
    </>
  );
}
