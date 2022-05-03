<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'
import SunSvg from '../icons/Sun.svg'
import MoonSvg from '../icons/Moon.svg'

const currentSvg = ref(SunSvg)
const toggleThemeClick = () => {
  const html = document.querySelector('html')
  const theme = html.classList[0]

  if (theme === 'light') {
    html.classList.remove('light')
    html.classList.add('dark')
    currentSvg.value = MoonSvg
  } else {
    html.classList.remove('dark')
    html.classList.add('light')
    currentSvg.value = SunSvg
  }
}
</script>
<template>
  <div class="toggle-theme" @click="toggleThemeClick">
    <img class="toggle-icon" :src="currentSvg" alt="toggle theme">
  </div>
</template>
<style scoped lang="scss">
.toggle-theme {
  width: 32px;
  height: 32px;
  margin-left: 1rem;
  margin-right: 1rem;
  color: var(--c-text);
  font-size: 1.2em;
  cursor: pointer;

  .toggle-icon {
    width: 1.35em;
    height: 1.35em;
  }
}
</style>