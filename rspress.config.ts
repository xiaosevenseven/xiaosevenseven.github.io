import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginLastUpdated } from '@rspress/plugin-last-updated';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Seven的前端开发博客',
  icon: '/logo.jpg',
  logo: {
    light: '/logo.jpg',
    dark: '/logo.jpg',
  },
  themeConfig: {
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/xiaosevenseven',
      },
    ],
  },
  plugins: [pluginLastUpdated()],
});
