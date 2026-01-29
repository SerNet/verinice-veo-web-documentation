// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from "vue";
import { useRouter } from "vitepress";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./overrides.css";

function addLandmarks() {
  const vpContent = document.querySelector(".VPContent");
  if (vpContent) {
    if (vpContent?.classList.contains("is-home")) {
      vpContent.setAttribute("role", "main");
      vpContent.setAttribute("aria-label", "Main content");
    } else {
      vpContent.removeAttribute("role");
      vpContent.removeAttribute("aria-label");
    }
  }
}

export default {
  extends: DefaultTheme,
  setup() {
    const router = useRouter();
    onMounted(() => {
      addLandmarks(); // on start
      router.onAfterRouteChange = () => {
        addLandmarks();
      };
    });
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({}) {
    // ...
  },
} satisfies Theme;
