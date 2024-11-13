<script lang="ts" setup>
  import { usePageStore } from '@/stores/page'

  usePageStore().pageData.title = 'Home'
</script>

<template>
  <h1>Home</h1>
</template>
