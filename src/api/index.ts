import axios, { AxiosResponse } from 'axios';

import { GetGithubIssueRequestParam, GetGithubIssueListResponse } from '../types';

const instance = axios.create({
  baseURL: `https://api.github.com/repos/facebook/create-react-app/issues`,
});

export const getCRAGithubIssueList = (params: GetGithubIssueRequestParam) => {
  return instance.get<GetGithubIssueListResponse>('', { params });
};

export default instance;
