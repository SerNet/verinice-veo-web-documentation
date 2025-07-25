import { defineConfig } from "vitepress";
import type { DefaultTheme, UserConfig } from "vitepress";
import { sidebarItems } from "./sideBar";
import { MultiLingualSidebarItem } from "./MultiLingualSidebarItem";

// Shared configuration
const sharedConfig: UserConfig<DefaultTheme.Config> = {
  ignoreDeadLinks: false,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
};

// German theme configuration
const deThemeConfig: DefaultTheme.Config = {
  outline: [2, 3],
    i18nRouting: true,
    siteTitle: false,
    logo: "/veo-logo.svg",
    nav: [{ text: "Home", link: `/` }],
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


    socialLinks: [
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/showcase/verinice/",
      },
      { icon: "youtube", link: "https://www.youtube.com/c/verinice" },
      { icon: "github", link: "https://github.com/SerNet/verinice-veo" },
    ],
    outlineTitle: "Auf dieser Seite",
    darkModeSwitchLabel: "Theme",
    darkModeSwitchTitle: "Zum Dark Theme wechseln",
    lightModeSwitchTitle: "Zum Light Theme wechseln",
  
};

// English theme configuration
const enThemeConfig: DefaultTheme.Config = {
 outline: [2, 3],
  i18nRouting: true,
  siteTitle: false,
  logo: "/veo-logo.svg",
  nav: [{ text: "Home", link: `/en/` }],
  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "Search",
          buttonAriaLabel: "Search",
        },
        modal: {
          displayDetails: "Show details",
          resetButtonTitle: "Reset search",
          backButtonTitle: "Go back",
          noResultsText: "No results for",
          footer: {
            selectText: "to select",
            selectKeyAriaLabel: "to select",
            navigateText: "to navigate",
            navigateUpKeyAriaLabel: "to navigate up",
            navigateDownKeyAriaLabel: "to navigate down",
            closeText: "to close",
            closeKeyAriaLabel: "to close",
          },
        },
      },
    },
  },

  socialLinks: [
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/showcase/verinice/",
    },
    { icon: "youtube", link: "https://www.youtube.com/c/verinice" },
    { icon: "github", link: "https://github.com/SerNet/verinice-veo" },
  ],
  outlineTitle: "On this page",
  darkModeSwitchLabel: "Theme",
  darkModeSwitchTitle: "Switch to dark theme",
  lightModeSwitchTitle: "Switch to light theme",
};

function localizeSidebar(items: MultiLingualSidebarItem[], lang: "de" | "en"): DefaultTheme.SidebarItem[] {
  return items.map((item) => ({
    ...item,
    text: item.text[lang] ,
    link: lang === "de" ? item.link : `/${lang}/${item.link}`,
    //Recursively processes groups and sub-groups
    items: item.items ? localizeSidebar(item.items, lang) : undefined,
  }));
}

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de',
      title: "Dokumentation",
      description: "verinice.veo - mit Sicherheit neu!",
      themeConfig: {
       ...deThemeConfig,
        sidebar: localizeSidebar(sidebarItems, "de"),
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "Documentation",
      description: "verinice.veo - securely new!",
      themeConfig: {
       ...enThemeConfig,
        sidebar: localizeSidebar(sidebarItems, "en"),
      },
      link: '/en/',
    },
  },
});