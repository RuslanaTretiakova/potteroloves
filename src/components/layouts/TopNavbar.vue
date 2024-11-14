<script setup lang="ts">
  import { usePageStore } from '@/stores/PageStore'
  import { storeToRefs } from 'pinia'

  const { pageData } = storeToRefs(usePageStore())
</script>

<template>
  <v-app-bar :elevation="10">
    <template #prepend>
      <v-app-bar-nav-icon />
    </template>

    <v-app-bar-title>
      <h3>{{ pageData.title }}</h3>
    </v-app-bar-title>
    <Theme />
  </v-app-bar>
</template>
