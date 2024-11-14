<script setup lang="ts">
  interface LinkProp {
    title: string
    to: string
    icon: string
  }

  defineProps<{
    links: LinkProp[]
  }>()
</script>

<template>
  <RouterLink
    v-for="link in links"
    :key="link.title"
    :icon="link.icon"
    :to="link.to"
  >
    <v-list-item>{{ link.title }}</v-list-item>
  </RouterLink>
</template>
