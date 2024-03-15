import { defineConfig } from 'dumi';

const repo = 'doctorwang'; // 项目名

export default defineConfig({
  title: 'Doctor',
  themeConfig:{
    logo:'/logo.png',
    name:'Doctor',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
});
