<script lang="ts">
  import { usePageStore } from '@/stores/page'

  usePageStore().pageData.title = 'Favorites'
</script>

<template>
  <h1>Favorites</h1>
</template>
