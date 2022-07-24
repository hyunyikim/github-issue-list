import { format } from 'date-fns';

import { GetGithubIssueResponse } from '../src/types';

const DATE_FORMAT = 'yyyy-MM-dd';

export default function GithubRepoIssueListItem({ data }: { data: GetGithubIssueResponse }) {
  const { number, title, user, created_at, updated_at, comments, html_url, state } = data as GetGithubIssueResponse;

  return (
    <>
      <div>{number}</div>
      <div className='text-left'>{title}</div>
      <div>{user.id}</div>
      <div>{state}</div>
      <div>{comments}</div>
      <div>{format(new Date(created_at), DATE_FORMAT)}</div>
      <div>{format(new Date(updated_at), DATE_FORMAT)}</div>
    </>
  );
}
