// config.ts

import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url);

export default defineConfig({
  lang: "en-US",
  title: "Seven的博客",
  description: "Vite & Vue powered static site generator.",

  lastUpdated: true, // git commit 信息来获取时间戳
  cleanUrls: true, // 是否允许页面的 URL 不带.html 后缀

  // 数组，可以设置 meta 标签等信息。
  head: [["meta", { name: "theme-color", content: "#3c8772" }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    // 自定义导航栏
    nav: nav(),

    // 自定义左侧导航栏样式
    sidebar: {},

    docFooter: { prev: "上一篇", next: "下一篇" },
    lastUpdatedText: "最近更新时间",
    // 在 Github 编辑此页
    editLink: {
      pattern:
        "git@github.com:xiaosevenseven/xiaosevenseven.github.io.git/docs/:path",
      text: "Edit this page on GitHub",
    },

    // 定义外部链接
    socialLinks: [
      {
        icon: "github",
        link: "git@github.com:xiaosevenseven/xiaosevenseven.github.io.git",
      },
    ],

    // 配置页面底部的说明信息、版权信息等
    footer: {
      copyright:
        "Released under the MIT License ｜Copyright © 2022-present Seven",
    },

    carbonAds: {
      code: "CEBDT27Y",
      placement: "vuejsorg",
    },
  },
});

function nav() {
  return [
    { text: "JS", link: "/js/", activeMatch: "/js/data-type" },
    { text: "Vue", link: "/vue/", activeMatch: "" },
    { text: "React", link: "/react/", activeMatch: "" },
  ];
}
