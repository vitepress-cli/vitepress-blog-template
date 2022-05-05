<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

import Sidebar from './Sidebar.vue'
const { theme } = useData()
const { path } = useRoute()
const pages = theme.value.sidebar[path]

const hasSidebar = computed(() => !!theme.value.sidebar)

</script>
<template>
  <main>
    <Sidebar class="sidebar-contain" v-if="hasSidebar" :pages="pages"></Sidebar>
    <Content class="content"></Content>
  </main>
</template>
<style scoped lang="scss">
main {
  width: 100vw;
  display: flex;

  .sidebar-contain {
    width: 20%;
  }

  .content {
    box-sizing: border-box;
    padding: 0 5%;
    width: 80%;

  }
}
</style>