<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { site, frontmatter } = useData()
// home
const footerInfo = computed(() => {
  const footer = frontmatter.value.footer || site.footer
  return !!footer ? footer : 'must be config footer info if you want to deloying'
})
</script>
<template>
  <footer>
    {{ footerInfo }}
  </footer>
</template>
<style scoped lang="scss">
footer {
  width: 100vw;
  margin-top: 1.2rem;
  text-align: center;
  color: var(--c-text-light-3);
}
</style>