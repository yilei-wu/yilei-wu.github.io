export default {
  title: "Yilei's Blog",
  description: "A simple blog",
  themeConfig: {
    nav: [
      { text: '博客', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '文章',
          items: [
            { text: '开始使用 Claude Code', link: '/posts/claude-code' },
            { text: '第二篇', link: '/posts/second-post' },
            { text: '第一篇', link: '/posts/first-post' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yilei-wu' }
    ],
    footer: {
      copyright: 'Copyright © 2025-present Yilei'
    }
  }
}