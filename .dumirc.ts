import { defineConfig } from 'dumi';

const repo = 'doctor docs'; // 项目名

export default defineConfig({
  title: 'doctor docs',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
});
