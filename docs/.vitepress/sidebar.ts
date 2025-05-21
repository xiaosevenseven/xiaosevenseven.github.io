export default function getSidebar() {
  return {
    "/vue/": {
      text: "Vue",
      collapsed: false,
      base: "/vue",
      items: [
        { text: "Vue3", link: "/vue" },
        { text: "Vue2", link: "/vue2" },
      ],
    },
  };
}
