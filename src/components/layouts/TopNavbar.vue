<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const { pageData } = storeToRefs(usePageStore())
</script>

<template>
  <v-app-bar :elevation="5">
    <template v-slot:prepend>
      <v-app-bar-nav-icon />
    </template>

    <v-app-bar-title>
      <h3>{{ pageData.title }}</h3>
    </v-app-bar-title>
  </v-app-bar>
</template>
