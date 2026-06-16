import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'Seven Blog',
  description: 'Seven 的个人技术博客，记录前端工程、框架实践和 AI 辅助开发。',
  icon: '/seven-icon.svg',
  logo: {
    light: '/seven-logo.svg',
    dark: '/seven-logo.svg',
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
