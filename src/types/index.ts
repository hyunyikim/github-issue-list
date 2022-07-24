export type GithubIssueSort = 'created' | 'updated' | 'comments';
export type GithubIssueStatue = 'open' | 'closed' | 'all';

export type GetGithubIssueRequestParam = {
  page: number;
  sort?: GithubIssueSort;
  statue?: GithubIssueStatue;
};

export type GetGithubIssueListResponse = {
  number: number;
  title: string;
  user: GithubIssueUserResponse;
  created_at: Date;
  updated_at: Date;
  comments: number;
  html_url: string;
  state: GithubIssueStatue;
}[];

export type GithubIssueUserResponse = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};
