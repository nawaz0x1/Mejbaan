'use client';

import LogoutIcon from '@/assets/LogoutIcon';
import { logoutUser } from '@/appwrite/utils';
import { UserContext } from '@/context/userContext';
import { useContext } from 'react';
import { Erica_One } from 'next/font/google';

export default function Logout() {
  const { setIsLoggedIn } = useContext(UserContext);
  return (
    <div
      onClick={async () => {
        try {
          await logoutUser();
        } catch (error) {
          throw new Error(error);
        }
        setIsLoggedIn(false);
      }}
      className="flex justify-center m-2 sm:mr-1"
    >
      <div
        className="hover:bg-mejbaanDark rounded-lg p-2 text-2xl"
        data-tip="Logout"
      >
        <LogoutIcon />
      </div>
    </div>
  );
}
