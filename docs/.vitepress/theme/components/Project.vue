<script setup>
import { toRefs } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  name: String,
  description: String,
  link: String,
  icon: String
})
const { name, description, link } = toRefs(props)
</script>
<template>
  <a class="project-contain" :href="link" target="_blank">
    <img class="project-icon" :src="withBase(`/icons/${icon}.svg`)" alt="Project">
    <p class="project-text">
      <span class="name">{{ name }}</span>
      <span class="description">{{ description }}</span>
    </p>
  </a>
</template>
<style scoped lang="scss">
.project-contain {
  width: 23vw;
  height: 12vh;
  margin-top: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    text-decoration: none;
  }

  .project-icon {
    width: 30%;
    transform: scale(0.5);
  }

  .project-text {
    width: 70%;
    display: flex;
    flex-direction: column;

    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .description {
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>