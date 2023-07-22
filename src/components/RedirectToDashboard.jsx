'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useContext } from 'react';
import { UserContext } from '@/context/userContext';

export default function RedirectToDashboard() {
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);

  //If the user is logged in it redirects them to the dashboard.
  //This component is placed in the login and register page
  useEffect(() => {
    if (isLoggedIn) router.push('/dashboard');
  });

  return null;
}
