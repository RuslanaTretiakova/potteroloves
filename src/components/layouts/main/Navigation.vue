<script setup lang="ts">
  const links = [
    {
      title: 'Home',
      to: '/',
      icon: 'home',
    },
    {
      title: 'Favorites',
      to: '/favorites',
      icon: 'info',
    },
  ]
</script>

<template>
  <v-navigation-drawer class="px-5" :width="250">
    <SideBarLinks :links="links" />
  </v-navigation-drawer>
</template>
