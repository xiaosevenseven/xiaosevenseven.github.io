import { defineConfig } from 'vitepress'
import { getNav } from './nav'
import { getSidebar } from './sidebar'
import { head } from "./head";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: head,
  base: '/',
  outDir: '../dist',  // 构建产物输出到项目根目录的 dist 文件夹
  title: "Seven 的开发网站",
  description: "个人文章分享",
  themeConfig: {
    logo: 'images/logo.jpg',
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
      { icon: 'github', link: 'https://github.com/xiaosevenseven' }
    ],


  },
  markdown: {
    lineNumbers: true
  }
})
