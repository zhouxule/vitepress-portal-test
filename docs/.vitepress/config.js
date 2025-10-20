export default {
  title: "Finalytix",
  description: "A Simplified Compliance Chatbot",
  base: "/vitepress-portal-test/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Price", link: "/price/" },
      { text: "About", link: "/about/" },
      { text: "GitHub", link: "https://github.com/zhouxule/vitepress-portal-test" }
    ],

    localeLinks: {
      text: "English",
      items: [
        { text: "English", link: "/" },
        { text: "中文", link: "/zh/" }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/zhouxule/vitepress-portal-test" }
    ],

    footer: {
      message: "© 2025 Finalytix. All rights reserved.",
      copyright: ""
    },

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: '安装', link: '/guide/install' },
            { text: '配置', link: '/guide/config' },
            { text: '部署', link: '/guide/deploy' }
          ]
        }
      ]
    }
  }
}
