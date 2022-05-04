<script setup>
import { useData } from 'vitepress'

import Project from './Project.vue'

const { frontmatter } = useData()
const { projects } = frontmatter.value
console.log(frontmatter)
</script>
<template>
  <main>
    <h1 class="projects-title">Projects</h1>
    <section class="projects-contain">
      <Project v-for="project in projects" :name="project.name" :description="project.description" :icon="project.icon"
        :link="project.link">
      </Project>
    </section>
  </main>
</template>
<style scoped lang="scss">
main {
  width: 60vw;
  margin: 0 auto;

  .projects-title {
    display: inline-block;
    padding-bottom: 20px;
    border-bottom: 3px solid;
  }

  .projects-contain {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>