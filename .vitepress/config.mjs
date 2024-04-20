import { defineConfig } from "vitepress";
// import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "龙傲天的个人笔记",
  description: "龙傲天真牛逼",
  head: [["link", { rel: "icon", href: "/blog/飞天小女警_毛毛.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/飞天小女警_毛毛.svg",
    // outline 定义展示的标题级别
    // outlineTitle: "目录", // 侧边栏显示目录
    outline: [2, 6],
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    nav: [
      {
        text: "前端",
        items: [
          {
            text: "HTML",
            link: "/Front-end/html",
          },
        ],
      },
      { text: "跳转", link: "/Front-end/html" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "Examples2",
    //     items: [
    //       { text: "Markdown 演示2", link: "/markdown-examples" },
    //       { text: "Runtime API 演示2", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 设置底部
    footer: {
      copyright: "Copyright@ 2024 我的笔记",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
});
