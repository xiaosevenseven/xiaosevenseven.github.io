export default function getSidebar() {
  return {
    "/vue/": {
      text: "Vue",
      collapsed: false,
      base: "/vue",
      items: [
        { 
          text: "Vue3源码解析",
          items: [
            { text: "前言", link: "/code-analysis/foreword.md" },
            { text: "reactivity", link: "/code-analysis/reactivity.md" },
            { text: "compiler-core", link: "/code-analysis/compiler-core.md" },
            { text: "compiler-dom", link: "/code-analysis/compiler-dom.md" },
            { text: "compiler-sfc", link: "/code-analysis/compiler-sfc.md" },
            { text: "runtime-core", link: "/code-analysis/runtime-core.md" },
            { text: "runtime-dom", link: "/code-analysis/runtime-dom.md" },
            { text: "shared", link: "/code-analysis/shared.md" }
          ],
        },
        { text: "Vue2", link: "/vue2" },
      ],
    },
  };
}
