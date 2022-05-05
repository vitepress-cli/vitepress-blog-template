export default {
  title: 'vitepress-template',
  themeConfig: {
    nav: [
      {
        text: 'blog',
        link: '/blogs/'
      },
      {
        text: 'project',
        link: '/projects/'
      }
    ],
    communities: [
      {
        name: 'Bilibili',
        link: 'https://space.bilibili.com/21142045?spm_id_from=333.1007.0.0'
      },
      {
        name: 'Github',
        link: 'https://github.com/Asaki-M'
      },
      {
        name: 'Juejin',
        link: 'https://juejin.cn/user/2796746683725271'
      }
    ],
    sidebar: {
      '/blogs/': [
        { link: '/blogs/', name: 'index' },
        { link: 'TCP连接与HTTPS加密', name: 'TCP连接与HTTPS加密' },
        { link: 'test1', name: 'test1' },
        { link: 'test2', name: 'test2' },
        { link: 'test3', name: 'test3' }
      ]
    }
  }
}
