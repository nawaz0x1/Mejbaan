'use client';

import Logout from './Logout';
import LogoComponent from './LogoComponent';
import MenuButtons from './MenuButtons';

export default function Menubar({ menu, setMenu }) {
  return (
    <nav className="flex justify-between m-2 max-w-screen">
      <LogoComponent />
      <MenuButtons menu={menu} setMenu={setMenu} />
      <Logout />
    </nav>
  );
}
