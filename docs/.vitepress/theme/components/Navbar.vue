<script setup>
import { useData } from 'vitepress'
import NavbarTitle from './NavbarTitle.vue'
import NavLinks from './NavLinks.vue'
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
}
</style>