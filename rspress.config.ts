import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: "Seven's Blog",
  description: 'Seven 的个人技术博客，记录 Vue、React、工程化与 AI 实践。',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/xiaosevenseven',
      },
    ],
  },
  route: {
    exclude: ['superpowers/**'],
  },
});
