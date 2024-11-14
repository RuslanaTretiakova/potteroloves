<script lang="ts">
  import { usePageStore } from '@/stores/PageStore'

  usePageStore().pageData.title = 'Favorites'
</script>

<template>
  <v-container>
    <h1>Hello from</h1>
  </v-container>
</template>
