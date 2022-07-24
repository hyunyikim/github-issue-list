import Image from 'next/image';
import { format } from 'date-fns';

import { GetGithubIssueResponse, GithubIssueUserResponse } from '../src/types';

const DATE_FORMAT = 'yyyy-MM-dd';

export default function GithubRepoIssueListItem({ data }: { data: GetGithubIssueResponse }) {
  const { number, title, user, created_at, updated_at, comments, html_url, state } = data as GetGithubIssueResponse;
  return (
    <>
      <ListItem>{number}</ListItem>
      <ListItem>
        <a href={html_url} target='_blank' rel='noreferrer'>
          {title}
        </a>
      </ListItem>
      <ListItem>
        <UserProfile data={user} />
      </ListItem>
      <ListItem>{state}</ListItem>
      <ListItem>{comments}</ListItem>
      <ListItem>{format(new Date(created_at), DATE_FORMAT)}</ListItem>
      <ListItem>{format(new Date(updated_at), DATE_FORMAT)}</ListItem>
    </>
  );
}

const ListItem = ({ children }: { children: React.ReactElement | React.ReactDOM | number | string }) => (
  <div className='flex justify-center items-center text-sm'>
    <>{children}</>
  </div>
);

const UserProfile = ({ data }: { data: GithubIssueUserResponse }) => {
  return (
    <a href={data.html_url} target='_blank' rel='noreferrer'>
      <Image src={data.avatar_url} width={50} height={50} alt='user profile' />
    </a>
  );
};
