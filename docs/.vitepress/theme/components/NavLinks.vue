<script setup>
import { useData } from 'vitepress'
import NavLink from './NavLink.vue'
import ToggleTheme from './ToggleTheme.vue'
const { theme } = useData()
</script>
<template>
  <div class="nav-links-contain">
    <div class="nav">
      <NavLink v-for="item in theme.nav" :key="item.text" :text="item.text" :link="item.link"></NavLink>
    </div>
    <div class="communities">
      <NavLink v-for="item in theme.communities" :key="item.name" :icon="item.name" :link="item.link"></NavLink>
    </div>
    <ToggleTheme></ToggleTheme>
  </div>
</template>
<style scoped lang="scss">
.nav-links-contain {
  display: flex;
  align-items: center;
}
</style>