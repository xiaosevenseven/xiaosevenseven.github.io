<template>
  <div class="giscus-container">
    <component
        v-if="showComment"
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="xiaosevenseven/xiaosevenseven.github.io"
        data-repo-id="R_kgDOQ-2B0w"
        data-category="Announcements"
        data-category-id="DIC_kwDOQ-2B084C1RgN"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const showComment = ref(false)

onMounted(() => {
  showComment.value = true
})

// 路由变化时重新加载评论
watch(
    () => route.path,
    () => {
      showComment.value = false
      setTimeout(() => {
        showComment.value = true
      }, 200)
    }
)
</script>

<style scoped>
.giscus-container {
  margin-top: 2rem;
}
</style>