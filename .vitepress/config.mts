import { defineConfig, l } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation",
  description: "verinice.veo - new for sure!",
  ignoreDeadLinks: true,
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
      { text: 'Home', link: `/` }
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Release Notes',  link: '/release-notes/',
            collapsed: true, 
            items: [
              { text: 'verinice 1.20', link: '/release-notes/verinice-1.20' },
              { text: 'verinice 1.19', link: '/release-notes/verinice-1.19' },
              { text: 'verinice 1.18', link: '/release-notes/verinice-1.18' }
            ]
          },
          { 
            text: 'Benutzerhandbuch', link: '/manual/',
            collapsed: true, 
            items: [
              { text: 'Schnelleinstieg', link: '/manual/quickstart' },
              { text: 'Benutzeroberfläche', link: '/manual/user-interface' },
              { text: 'Dashboard', link: '/manual/dashboard' },
              { text: 'Objekte', link: '/manual/objects' },
              { text: 'Kataloge', link: '/manual/catalogs' },
              { text: 'Reports', link: '/manual/reports' },
              { text: 'Risikodefinitionen', link: '/manual/risk-definition' }
            ]
          },
          {
            text: 'Objektmodell', link: '/object-model/',
            collapsed: true,
            items: [
              { text: 'Domänen', link: '/object-model/domains' },
              { text: 'Objekte', link: '/object-model/objects' },
              { text: 'Formulare', link: '/object-model/forms' }
            ]
          },
          { text: 'Developers (in English)', link: '/developers/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/products/sernet-gmbh-verinice/' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/verinice' },
      { icon: 'github', link: 'https://github.com/SerNet/verinice-veo' }
    ]
  }
})
