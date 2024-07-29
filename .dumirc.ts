import { defineConfig } from 'dumi';

const repo = 'doctorwang'; // 项目名

export default defineConfig({
  title: 'FW-去中心化组织',
  themeConfig: {
    logo:
      process.env.NODE_ENV === 'production' ? `/${repo}/logo.png` : '/logo.png',
    name: 'Doctor',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
});
