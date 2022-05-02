<script setup>
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

const { frontmatter } = useData()
// home
const enableHome = computed(() => !!frontmatter.value.home)
</script>

<template>
  <Navbar></Navbar>
  <Home v-if="enableHome"></Home>
  <Footer></Footer>
</template>