'use client';

import Logout from './Logout';
import LogoComponent from './LogoComponent';
import MenuButtons from './MenuButtons';

export default function Menubar() {
  return (
    <nav className="flex justify-between m-2 max-w-screen">
      <LogoComponent />
      <MenuButtons />
      <Logout />
    </nav>
  );
}
