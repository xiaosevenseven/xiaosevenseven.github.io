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
      { text: 'Node', link: '/node/packageJson' },
      { text: 'Vite', link: '/vite' },
      { text: 'TS', link: '/ts' },
      { text: '工程化', link: '/engineering/eslint' },
      { text: 'Flutter', link: '/flutter' },
    ],

    sidebar: {
      "/js/": [],
      "/vue/": [
        {
           text: '指南', link: '/vue/index.md'
        },
        {
          text: "源码解析",
          items: [
            { text: '响应式原理', link: '/vue/codeAnalysis/reactivity.md' },
          ]
        },
        {
          text: "手写源码",
          items: []
        },
        {
          text: "相关插件",
          items: [
            { text: 'router', link: '/vue/plugins/router.md' },
            { text: 'pnina', link: '/vue/plugins/pnina.md' },
          ]
        }
      ],
      "/node/": [
        {text: "packageJson", link: '/node/packageJson.md'},
      ],
      "/vite/": [
        {
          text: "插件",
          items: [
            {text: "vite-plugin-vue", link: "/vite/plugins/vite-plugin-vue.md"}
          ]
        }
      ],
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
