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
    <main>
      {isLoading ? (
        // TODO loading motion
        <>loading</>
      ) : (
        <div
          className='grid grid-cols-7 text-center'
          css={css`
            grid-template-columns: 1fr 600px repeat(5, 1fr);
          `}
        >
          <div>이슈번호</div>
          <div>제목</div>
          <div>유저</div>
          <div>상태</div>
          <div>코멘트 수</div>
          <div>작성일</div>
          <div>수정일</div>
          {data?.data?.map((item: GetGithubIssueResponse) => (
            <GithubRepoIssueListItem key={item.number} data={item} />
          ))}
        </div>
      )}
    </main>
  );
}
