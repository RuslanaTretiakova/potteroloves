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
  <v-list-item
    v-for="link in links"
    :key="link.title"
    :prepend-icon="link.icon"
    :to="link.to"
  >
    {{ link.title }}</v-list-item>
</template>
