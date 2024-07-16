import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ReactQueryProps = { children: React.ReactNode };

const ReactQuery: FC<ReactQueryProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQuery;
