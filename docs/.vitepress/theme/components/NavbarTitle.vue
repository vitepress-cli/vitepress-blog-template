<script setup>
import { withBase, useData } from 'vitepress'
const { site, theme, localePath } = useData()
</script>
<template>
  <a class="nav-bar-title" :href="localePath" :aria-label="`${site.title}, back to home`">
    <img v-if="theme.logo" class="logo" :src="withBase(theme.logo)" alt="Logo" />
    {{ site.title }}
  </a>
</template>
<style scoped lang="scss">
.nav-bar-title {
  font-size: 1.35rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--c-text);
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 5rem;
  margin-right: 1.3rem;
  vertical-align: bottom;
}
</style>