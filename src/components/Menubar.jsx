'use client';

import LogoutIcon from '@/assets/LogoutIcon';
import SettingsIcon from '@/assets/SettingsIcon';
import Logo from '@/assets/appLogo.png';
import SearchIcon from '@/assets/SearchIcon';
import ProviderIcon from '@/assets/ProviderIcon';
import MapIcon from '@/assets/MapIcon';
import Image from 'next/image';
import { logoutUser } from '@/appwrite/utils';
import { UserContext } from '@/context/userContext';
import { useContext } from 'react';

export default function Menubar({ menu, setMenu }) {
  const { setIsLoggedIn } = useContext(UserContext);

  return (
    <nav className="flex justify-between m-2">
      <div className="hidden sm:inline-flex aspect-square h-14">
        <Image src={Logo} height={'70'} alt="logo" />
      </div>
      <div>
        <div className="flex border border-white rounded-3xl p-1 mt-2 mb-2 text-xl">
          <div
            className={
              menu === 'find'
                ? 'bg-white rounded-2xl'
                : 'hover:bg-mejbaanDark rounded-2xl'
            }
            onClick={() => setMenu('find')}
          >
            <div className="flex p-1">
              <span className="p-1">
                <SearchIcon color={menu === 'find' ? 'mejbaan' : 'white'} />
              </span>
              <h2 className="text-mejbaan pr-1">
                <span className={menu !== 'find' && 'hidden'}>Find</span>
              </h2>
            </div>
          </div>

          <div
            className={
              menu === 'provide'
                ? 'bg-white rounded-2xl'
                : 'hover:bg-mejbaanDark rounded-2xl'
            }
            onClick={() => setMenu('provide')}
          >
            <div className="flex p-1">
              <span className="p-1">
                <ProviderIcon
                  color={menu === 'provide' ? 'mejbaan' : 'white'}
                />
              </span>
              <h2 className="text-mejbaan pr-1">
                <span className={menu !== 'provide' && 'hidden'}>Provide</span>
              </h2>
            </div>
          </div>

          <div
            className={
              menu === 'map'
                ? 'bg-white rounded-2xl'
                : 'hover:bg-mejbaanDark rounded-2xl'
            }
            onClick={() => setMenu('map')}
          >
            <div className="flex p-1">
              <span className="p-1">
                <MapIcon color={menu === 'map' ? 'mejbaan' : 'white'} />
              </span>
              <h2 className="text-mejbaan pr-1">
                <span className={menu !== 'map' && 'hidden'}>Map</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-2xl m-2 ml-1">
        <div onClick={() => setMenu('settings')}>
          <div className="hover:bg-mejbaanDark rounded-lg p-1 pt-2 pb-2 sm:p-2">
            <SettingsIcon />
          </div>
        </div>
        <div
          onClick={async () => {
            await logoutUser();
            setIsLoggedIn(false);
          }}
        >
          <div className="hover:bg-mejbaanDark rounded-lg p-1 pt-2 pb-2 sm:p-2">
            <LogoutIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
