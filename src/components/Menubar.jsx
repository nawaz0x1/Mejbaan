'use client';

import Logout from './Logout';
import SettingsButton from './SettingsButton';
import LogoComponent from './LogoComponent';
import MenuButtons from './MenuButtons';

export default function Menubar({ menu, setMenu }) {
  return (
    <nav className="flex justify-between m-2">
      <LogoComponent />
      <MenuButtons menu={menu} setMenu={setMenu} />
      <div className="flex text-2xl m-2 ml-1">
        <SettingsButton />
        <Logout />
      </div>
    </nav>
  );
}
