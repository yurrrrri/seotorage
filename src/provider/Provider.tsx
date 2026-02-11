import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';

export default function Provider() {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
  </QueryClientProvider>
}