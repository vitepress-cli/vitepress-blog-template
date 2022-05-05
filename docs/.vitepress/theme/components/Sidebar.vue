<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  pages: Object
})
const { pages } = toRefs(props)
</script>
<template>
  <aside>
    <a v-for="item in pages" class="sidebar-item" :href="item.link">
      {{ item.name }}
    </a>
  </aside>
</template>
<style scoped lang="scss">
aside {
  box-sizing: border-box;
  padding: 0 10px;
  border-right: 2px solid #ccc;
  display: flex;
  flex-direction: column;

  .sidebar-item {
    color: var(--c-text);
    padding: 5px 0;
    text-decoration: none;
    font-size: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>