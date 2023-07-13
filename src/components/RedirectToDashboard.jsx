'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useContext } from 'react';
import { UserContext } from '@/context/userContext';

export default function RedirectToDashboard() {
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (isLoggedIn) router.push('/dashboard');
  });

  return null;
}
