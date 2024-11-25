import { defineConfig, l } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dokumentation",
  description: "verinice.veo - mit Sicherheit neu!",
  ignoreDeadLinks: false,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    outline: [2, 3],
    i18nRouting: true,
    siteTitle: false,
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Suche",
            buttonAriaLabel: "Suche",
          },
          modal: {
            displayDetails: "Details anzeigen",
            resetButtonTitle: "Suche zurücksetzen",
            backButtonTitle: "backButtonTitle",
            noResultsText: "Keine Ergebnisse für",
            footer: {
              selectText: "auswählen",
              selectKeyAriaLabel: "auswählen",
              navigateText: "navigieren",
              navigateUpKeyAriaLabel: "hoch navigieren",
              navigateDownKeyAriaLabel: "runter navigieren",
              closeText: "schließen",
              closeKeyAriaLabel: "schließen",
            },
          },
        },
      },
    },
    logo: "/veo-logo.svg",
    nav: [{ text: "Home", link: `/` }],

    sidebar: [
      {
        items: [
          {
            text: "Benutzerhandbuch",
            link: "/manual/",
            collapsed: true,
            items: [
              { text: "Benutzeroberfläche", link: "/manual/user-interface" },
              { text: "Objekte", link: "/manual/objects" },
              { text: "Kataloge", link: "/manual/catalogs" },
              { text: "Reports", link: "/manual/reports" },
              { text: "Risikodefinitionen", link: "/manual/risk-definition" },
              { text: "Benutzerverwaltung", link: "/manual/accounts" },
            ],
          },
          {
            text: "Die Domäne IT-Grundschutz",
            link: "/domain-it-gs/",
            collapsed: true,
            items: [
              { text: "Aufbau der Domäne", link: "/domain-it-gs/domain-it-gs-description" },
              { text: "Strukturanalyse", link: "/domain-it-gs/structure-analysis" },
              { text: "Schutzbedarfsfeststellung", link: "/domain-it-gs/protection-needs" },
              { text: "Modellierung", link: "/domain-it-gs/modelling" },
              { text: "IT-Grundschutz-Check", link: "/domain-it-gs/it-grundschutz-check.html" },
              { text: "Risikoanalyse", link: "/domain-it-gs/risk-analysis" },
            ],
          },
          {
            text: "Die Domäne DS-GVO",
            link: "/domain-ds-gvo/",
            collapsed: true,
            items: [
              { text: "Aufbau der Domäne", link: "/domain-ds-gvo/domain-ds-gvo-description" },
              { text: "Verzeichnis der Verarbeitungstätigkeiten", link: "/domain-ds-gvo/data-processing" },
              { text: "Datenübertragungen", link: "/domain-ds-gvo/data-transfer" },
              { text: "Datenschutz-Folgenabschätzung", link: "/domain-ds-gvo/data-protection-impact-assessment" },
              { text: "Datenschutzvorfälle", link: "/domain-ds-gvo/data-privacy-incidents" },
              { text: "Betroffenenanfragen", link: "/domain-ds-gvo/request-data-subjects" },
              { text: "Auftragsverarbeiter", link: "/domain-ds-gvo/processors" },
              { text: "Auftraggeber", link: "/domain-ds-gvo/controllers" },
            ],
          },
          {
            text: "Objektmodell",
            link: "/object-model/",
            collapsed: true,
            items: [
              { text: "Domänen", link: "/object-model/domains" },
              { text: "Objekte", link: "/object-model/objects" },
              { text: "Formulare", link: "/object-model/forms" },
            ],
          },
          { text: "Glossar", link: "/glossary/" },
          { text: "Entwicklerdokumentation",
            link: "/developers/", 
            collapsed: true,
             items: [
              {text: "Getting started with the verinice API", link: "/developers/getting-started-with-the-verinice-api"},
              {text: "Wörterbuch", link: "/developers/dictionary"},              
          ],
        },
          {
            text: "Release Notes",
            link: "/release-notes/",
            collapsed: true,
            items: [
              { text: "verinice 31", link: "/release-notes/verinice-31" },
              { text: "verinice 30", link: "/release-notes/verinice-30" },
              { text: "verinice 29", link: "/release-notes/verinice-29" },
              { text: "verinice 28", link: "/release-notes/verinice-28" },
              { text: "verinice 27", link: "/release-notes/verinice-27" },
              { text: "verinice 26", link: "/release-notes/verinice-26" },
              { text: "verinice 1.20", link: "/release-notes/verinice-1.20" },
              { text: "verinice 1.19", link: "/release-notes/verinice-1.19" },
              { text: "verinice 1.18", link: "/release-notes/verinice-1.18" },
            ],
          },
          { text: "Roadmap", link: "/roadmap/" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/products/sernet-gmbh-verinice/",
      },
      { icon: "youtube", link: "https://www.youtube.com/c/verinice" },
      { icon: "github", link: "https://github.com/SerNet/verinice-veo" },
    ],
    outlineTitle: "Auf dieser Seite",
    darkModeSwitchLabel: "Theme",
    darkModeSwitchTitle: "Zum Dark Theme wechseln",
    lightModeSwitchTitle: "Zum Light Theme wechseln",
  },
});
