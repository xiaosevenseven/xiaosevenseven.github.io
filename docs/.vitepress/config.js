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
    sidebar: {
      "/js/": sidebarJS(),
      "/algorithm/": sidebarAlgorithm(),
      "/net/": sidebarNet(),
      "/LeetCode/": sidebarConfig(),
      "/browser/": sidebarBrowser(),
    },

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
    { text: "VUE", link: "/vue/", activeMatch: "" },
    { text: "浏览器", link: "/browser/", activeMatch: "" },
    { text: "算法", link: "/algorithm/", activeMatch: "" },
    { text: "计算机网络", link: "/net/", activeMatch: "" },
    { text: "工程化", link: "/engineering/", activeMatch: "" },
  ];
}

function sidebarJS() {
  return [
    {
      text: "JS",
      items: [
        { text: "数据类型", link: "/js/data-type" },
        { text: "this的指向", link: "/js/this" },
        { text: "模块化开发", link: "/js/module" },
        { text: "原型", link: "/js/prototype" },
      ],
    },
  ];
}
function sidebarAlgorithm() {
  return [
    {
      text: "数据结构",
      collapsed: false,
      items: [
        { text: "数组", link: "/algorithm/array" },
        { text: "链表", link: "/algorithm/linkedList" },
        { text: "队列", link: "/algorithm/queue" },
        { text: "栈", link: "/algorithm/stack" },
        { text: "树", link: "/algorithm/tree" },
        { text: "堆", link: "/algorithm/heap" },
      ],
    },
    {
      text: "算法",
      collapsed: false,
      items: [
        { text: "位运算", link: "/algorithm/bitManipulation" },
        { text: "排序", link: "/algorithm/sort" },
      ],
    },
  ];
}

function sidebarNet() {
  return [
    {
      text: "计算机网络",
      items: [
        { text: "计算机网络", link: "/net/introduction" },
        { text: "OSI七层模型", link: "/net/osi" },
        { text: "TCP/IP协议", link: "/net/tcp-ip" },
        { text: "HTTP协议", link: "/net/http" },
        { text: "HTTPS协议", link: "/net/https" },
        { text: "HTTP2.0协议", link: "/net/http2" },
        { text: "HTTP3.0协议", link: "/net/http3" },
        { text: "DNS协议", link: "/net/dns" },
        { text: "UDP协议", link: "/net/udp" },
        { text: "TCP协议", link: "/net/tcp" },
        { text: "IP协议", link: "/net/ip" },
      ],
    },
  ];
}
function sidebarConfig() {
  return [
    {
      text: "Config",
      items: [
        { text: "Introduction", link: "/config/introduction" },
        { text: "App Configs", link: "/config/app-configs" },
        { text: "Theme Configs", link: "/config/theme-configs" },
        { text: "Frontmatter Configs", link: "/config/frontmatter-configs" },
      ],
    },
  ];
}

function sidebarBrowser() {
  return [
    {
      text: "安全",
      items: [
        { text: "XSS", link: "/browser/xss" },
        { text: "CSRF", link: "/browser/csrf" },
        { text: "CSP", link: "/browser/csp" },
        { text: "点击劫持", link: "/browser/clickjacking" },
        { text: "同源策略", link: "/browser/same-origin-policy" },
        { text: "跨域", link: "/browser/cross-origin" },
      ],
    },
    {
      text: "面试题",
      items: [
        {
          text: "输入URL到页面展示发生了什么？",
          link: "/browser/what_happen_url",
        },
      ],
    },
  ];
}
