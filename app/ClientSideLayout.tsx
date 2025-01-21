'use client';

import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function ClientSideLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [queryClient, setQueryClient] = useState<QueryClient | null>(null);

  useEffect(() => {
    setQueryClient(new QueryClient());
  }, []);

  if (!queryClient) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
