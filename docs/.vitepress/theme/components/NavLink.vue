<script setup>
import { toRefs } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  icon: String,
  link: String,
  text: String
})

const propsRefs = toRefs(props)
const { link, icon, text } = propsRefs

</script>
<template>
  <a :href="link" class="nav-link" :target="!!icon ? '_blank' : '_self'">
    {{ text && text }}
    <img v-if="icon" class="nav-icons" :src="withBase(`/icons/${icon}.svg`)" :alt="icon">
  </a>
</template>

<style scoped lang="scss">
.nav-link {
  width: 32px;
  height: 32px;
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  color: var(--c-text);
  font-size: 1.2em;

  .nav-icons {
    width: 1.35em;
    height: 1.35em;
  }
}
</style>