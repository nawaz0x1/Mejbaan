'use client';

import { UserContext } from '@/context/userContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (!isLoggedIn) router.replace('/login');
  });

  return <>{isLoggedIn && children}</>;
}
