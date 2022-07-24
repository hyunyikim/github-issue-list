import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GithubRepoIssueList from './GithubRepoIssueList';

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GithubRepoIssueList />
    </QueryClientProvider>
  );
};

export default Home;
