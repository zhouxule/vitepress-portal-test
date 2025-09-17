export default {
  title: "Horizon",
  description: "A Simplified Compliance Chatbot",
  base: "/vitepress-portal-test/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Price", link: "/price/" },
      { text: "About", link: "/about/" },
      { text: "GitHub", link: "https://github.com" }
    ],

    localeLinks: {
      text: "English",
      items: [
        { text: "English", link: "/" },
        { text: "中文", link: "/zh/" }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/" }
    ],

    footer: {
      message: "© 2025 Horizon. All rights reserved.",
      copyright: ""
    }
  }
}
