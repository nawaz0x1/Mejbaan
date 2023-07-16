'use client';

import LogoutIcon from '@/assets/LogoutIcon';
import SettingsIcon from '@/assets/SettingsIcon';
import Logo from '@/assets/appLogo.png';
import SearchIcon from '@/assets/SearchIcon';
import ProviderIcon from '@/assets/ProviderIcon';
import MapIcon from '@/assets/MapIcon';
import Image from 'next/image';
import Logout from './Logout';
import { UserContext } from '@/context/userContext';
import { useContext } from 'react';
import SettingsButton from './SettingsButton';
import LogoComponent from './LogoComponent';

export default function MenuButtons({ menu, setMenu }) {
  return (
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
              <ProviderIcon color={menu === 'provide' ? 'mejbaan' : 'white'} />
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
  );
}
