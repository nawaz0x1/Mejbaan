'use client';

import { useState } from 'react';
import Menubar from '@/components/Menubar';

export default function Dashboard() {
  const [menu, setMenu] = useState('find');
  return (
    <>
      <Menubar menu={menu} setMenu={setMenu} />
    </>
  );
}
