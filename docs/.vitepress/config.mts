import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Seven",
  description: "Seven的Blog",
  themeConfig: {
    logo: "images/logo.png",
    siteTitle: "Seven",
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'JS', link: '/js' },
      { text: 'Vue', link: '/vue' },
      { text: 'Vite', link: '/vite' },
      { text: 'TS', link: '/ts' },
      { text: 'Flutter', link: '/flutter' },
    ],

    sidebar: {
      "/js/": [],
      "/vue/": [],
      "/ts/": [],
      "/flutter/": [

      ]
    },

    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaosevenseven' },
      { icon: "juejin", link: "https://juejin.cn/user/4089838986340728"}
    ]
  }
})
