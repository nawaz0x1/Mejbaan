'use client';

import { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import { useRouter } from 'next/navigation';

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) router.replace('/dashboard');
  });

  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen">
        {!isLoggedIn && children}
      </section>
    </>
  );
}
