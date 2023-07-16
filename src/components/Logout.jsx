'use client';

import LogoutIcon from '@/assets/LogoutIcon';
import { logoutUser } from '@/appwrite/utils';
import { UserContext } from '@/context/userContext';
import { useContext } from 'react';

export default function Logout() {
  const { setIsLoggedIn } = useContext(UserContext);
  return (
    <div
      onClick={async () => {
        await logoutUser();
        setIsLoggedIn(false);
      }}
    >
      <div
        className="hover:bg-mejbaanDark rounded-lg p-1 pt-2 pb-2 sm:p-2 tooltip tooltip-bottom"
        data-tip="Logout"
      >
        <LogoutIcon />
      </div>
    </div>
  );
}
