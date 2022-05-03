<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

import NotFound from '../NotFound.vue'

const { frontmatter } = useData()

console.log(frontmatter)
// home
const enableHome = !!frontmatter.value.home

</script>
<template>
  <div class="home-contain">
    <Content v-if="enableHome" class="home-content"></Content>
    <div v-else class="home-empty">
      <NotFound :enaleHome="!enableHome"></NotFound>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-contain {
  width: 50vw;
  margin: 0 auto;

  .home-empty {
    width: 100%;
  }
}
</style>