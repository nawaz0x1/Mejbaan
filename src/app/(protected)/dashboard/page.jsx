'use client';

import { useState } from 'react';
import Menubar from '@/components/Menubar';

export default function page() {
  const [menu, setMenu] = useState('find');
  return (
    <>
      <Menubar menu={menu} setMenu={setMenu} />
    </>
  );
}
