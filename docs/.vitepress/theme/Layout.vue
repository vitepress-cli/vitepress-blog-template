<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import Page from './components/Page.vue'
import Projects from './components/Projects.vue'

const { frontmatter } = useData()
// home
const enableHome = computed(() => !!frontmatter.value.home)

// projects
const isProjects = computed(() => !!frontmatter.value.projects)

</script>

<template>
  <Navbar></Navbar>
  <Home v-if="enableHome"></Home>
  <Projects v-else-if="isProjects"></Projects>
  <Page v-else></Page>
  <Footer></Footer>
</template>