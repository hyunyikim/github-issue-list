import { useState } from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';

import { getCRAGithubIssueList } from '../src/api';
import { GetGithubIssueRequestParam, GetGithubIssueResponse } from '../src/types';
import GithubRepoIssueListItem from './GithubRepoIssueListItem';

export default function GithubRepoIssueList({}) {
  // TODO
  const [params, setParams] = useState<GetGithubIssueRequestParam>({ page: 1, sort: 'comments' });

  const { isLoading, isError, data } = useQuery(['githubRepoIssueList', params], () => getCRAGithubIssueList(params));

  return (
    <main className='max-w-[1280px] mx-auto'>
      {isLoading ? (
        // TODO loading motion
        <>loading</>
      ) : (
        <div
          className='grid grid-cols-7 gap-x-1 text-center w-max overflow-x-auto mx-auto'
          css={css`
            grid-template-columns: 1fr 600px repeat(5, 1fr);
          `}
        >
          <ListHeader name='이슈번호' />
          <ListHeader name='제목' />
          <ListHeader name='유저' />
          <ListHeader name='상태' />
          <ListHeader name='코멘트 수' />
          <ListHeader name='작성일' />
          <ListHeader name='수정일' />
          {data?.data?.map((item: GetGithubIssueResponse) => (
            <GithubRepoIssueListItem key={item.number} data={item} />
          ))}
        </div>
      )}
    </main>
  );
}

const ListHeader = ({ name }: { name: string }) => <div className='font-semibold py-2 bg-gray-100'>{name}</div>;
