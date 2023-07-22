'use client';

import { UserContext } from '@/context/userContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DataContextProvider } from '@/context/dataContext';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);

  // If the user is not logged in it will redirect them to the login page
  useEffect(() => {
    if (!isLoggedIn) router.replace('/login');
  });

  return (
    <>{isLoggedIn && <DataContextProvider>{children}</DataContextProvider>}</>
  );
}
