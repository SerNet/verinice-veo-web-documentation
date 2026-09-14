<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { VPFeatures } from "vitepress/theme";
import type { DefaultTheme } from "vitepress";

interface FeatureSection {
  title: string;
  features: DefaultTheme.Feature[];
}

const { frontmatter } = useData();
const sections = computed(
  () => (frontmatter.value.featureSections ?? []) as FeatureSection[],
);
</script>

<template>
  <div
    v-for="(section, index) in sections"
    :key="index"
    class="HomeFeatureSection"
  >
    <VPFeatures :features="section.features" />
  </div>
</template>
