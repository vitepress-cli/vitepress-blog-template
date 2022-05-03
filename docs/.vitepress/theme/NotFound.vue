<script setup>
import { toRefs } from 'vue'
import { withBase, useData } from 'vitepress'

const props = defineProps({
  enableHome: Boolean
})
const { enableHome } = toRefs(props)
const { localePath } = useData()
</script>

<template>
  <div class="not-found-contain">
    <img class="not-found-logo" :src="withBase('/logo.svg')" alt="not content">
    <p class="tips">No content, create some interesting blog or something on here.</p>
    <a v-if="enableHome" :href="localePath">Back to home</a>
  </div>
</template>
<style scoped lang="scss">
.not-found-contain {
  width: 50vw;

  .not-found-logo {
    width: 50%;
    display: block;
    margin: 0 auto;
  }

  .tips {
    font-size: 1.3rem;
    text-align: center;
  }
}
</style>