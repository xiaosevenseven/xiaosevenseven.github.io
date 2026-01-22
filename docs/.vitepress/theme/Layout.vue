<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Comment />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import Comment from './Comment.vue'
</script>