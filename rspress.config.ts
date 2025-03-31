import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginLastUpdated } from '@rspress/plugin-last-updated';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Seven',
  icon: '/logo',
  logo: {
    light: '/logo',
    dark: '/logo',
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
