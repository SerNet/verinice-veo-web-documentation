import { defineConfig, l } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation",
  description: "verinice.veo - new for sure!",
  /*
  locales: {
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
    },
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/' // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
    }
  },
  */
  themeConfig: {
    i18nRouting: true,
    siteTitle: false,
    search: {
      provider: 'local'
    },
    logo: '../assets/veo-logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: `/` },
      { text: 'User Manual', link: `/manual/`},
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'User Manual', link: '/manual/' },
          { text: 'User Interface', link: '/user-interface/' },
          {
            text: 'Dropdown Menu',
            items: [
              { text: 'Item A', link: '/item-1' },
              { text: 'Item B', link: '/item-2' },
              { text: 'Item C', link: '/item-3' }
            ]
          },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SerNet/verinice-veo' }
    ]
  }
})
