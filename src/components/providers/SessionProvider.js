'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthSessionProvider({ children }) {
  return (
    <SessionProvider 
      refetchInterval={5 * 60} // Refetch every 5 minutes
      refetchOnWindowFocus={false} // Prevent constant refetching
    >
      {children}
    </SessionProvider>
  );
}