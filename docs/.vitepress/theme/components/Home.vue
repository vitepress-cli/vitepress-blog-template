<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
// home
const enableHome = computed(() => !!frontmatter.value.home)
</script>
<template>
  <div class="home-contain">
    <Content v-if="enableHome" class="home-content"></Content>
    <div v-else class="home-empty">
      this is no content
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-contain {
  width: 50vw;
  margin: 0 auto;

  .home-content {}
}
</style>