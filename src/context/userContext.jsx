'use client';

import { useState, createContext, useEffect } from 'react';
import { isUserLoggedIn } from '@/appwrite/utils';

export const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { isLoggedIn, setIsLoggedIn };

  useEffect(() => {
    // Check if the user is logged in and updates the state
    (async () => {
      const response = await isUserLoggedIn();
      setIsLoggedIn(response);
    })();
  });
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
}
