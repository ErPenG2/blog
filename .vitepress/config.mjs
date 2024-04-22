import { defineConfig } from 'vitepress';
// import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogs/',
  title: '二彭',
  description: '二彭真牛逼',
  head: [['link', { rel: 'icon', href: '/blogs/飞天小女警_毛毛.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/飞天小女警_毛毛.svg',
    // outline 定义展示的标题级别
    // outlineTitle: "目录", // 侧边栏显示目录
    outline: [2, 6],
    sidebar: false, // 关闭侧边栏
    aside: 'left', // 设置右侧侧边栏在左侧显示
    nav: [
      {
        text: '前端',
        items: [
          {
            text: 'HTML',
            link: '/Front-end/html',
          },
          {
            text: 'CSS',
            link: '/Front-end/css',
          },
          {
            text: '移动web入门',
            link: '/Front-end/移动web入门',
          },
          {
            text: 'JavaScript基础与核心',
            link: '/Front-end/JavaScript基础与核心',
          },
          {
            text: 'Git从安装到基本使用',
            link: '/Front-end/Git从安装到基本使用',
          },
          { text: '一文熟悉Ajax', link: '/Front-end/一文熟悉Ajax' },
          {
            text: 'vue2',
            link: '/Front-end/vue2',
          },
          {
            text: 'vue3',
            link: '/Front-end/vue3',
          },
          { text: 'Sass常用特性', link: '/Front-end/Sass常用特性' },
          { text: '快速上手TypeScript', link: '/Front-end/快速上手TypeScript' },
        ],
      },
      {
        text: '前端知识',
        items: [
          {
            text: 'JavaScript对象常用方法',
            link: '/skill/JavaScript对象常用方法',
          },
        ],
      },
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    // 设置底部
    footer: {
      copyright: 'Copyright@ 2024 我的笔记',
    },
    // 设置搜索框的样式
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
});
