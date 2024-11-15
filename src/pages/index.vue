<script lang="ts" setup>
  import { usePageStore } from '@/stores/PageStore'

  usePageStore().pageData.title = 'Home'
</script>

<template>
  <v-container>
    <h1>Home hello from</h1>
  </v-container>
</template>
