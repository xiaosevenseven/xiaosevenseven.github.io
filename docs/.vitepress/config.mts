import { defineConfig } from 'vitepress'
import getNav from './nav'
import getSidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Seven 的开发网站",
  description: "个人文章分享",
  themeConfig: {
     logo: 'images/logo.png',
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新",
    search: {
      provider: "local",
    },

    outline: {
      level: [2, 6],
      label: '目录'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: getNav(),
    sidebar: getSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
