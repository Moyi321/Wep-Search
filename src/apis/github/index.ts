/*
 * @Author: Vir
 * @Date: 2021-03-28 21:46:07
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-16 22:52:26
 */

import axios from 'axios';

export interface Latest {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: Author;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: Date;
  published_at: Date;
  assets: any[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

export interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

// 获取github commit记录
export const commitList = (page: number = 1, size: number = 10) => {
  return axios.get('https://api.github.com/repos/virzs/Search-React/commits', {
    params: {
      page: page,
      per_page: size,
    },
  });
};

// 获取github releases记录
export const releasesList = (page: number = 1, size: number = 10) => {
  return axios.get('https://api.github.com/repos/virzs/Search-Next/releases', {
    params: {
      page: page,
      per_page: size,
    },
  });
};

// 获取最新版本
export const latest = () => {
  return axios.get(
    'https://api.github.com/repos/virzs/Search-Next/releases/latest',
  );
};
