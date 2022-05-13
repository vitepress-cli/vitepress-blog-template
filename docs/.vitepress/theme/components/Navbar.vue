<script setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress'
import NavbarTitle from './NavbarTitle.vue'
import NavLinks from './NavLinks.vue'

onMounted(() => {
  const html = document.querySelector('html')
  html.classList.add('light')
})
</script>

<template>
  <header>
    <NavbarTitle></NavbarTitle>
    <NavLinks></NavLinks>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  height: 5rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.3rem;
  border-bottom: 1px solid var(--c-divider);
  background: var(--c-bg-2);
}
</style>