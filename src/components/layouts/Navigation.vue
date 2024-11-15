<script setup lang="ts">
  import { useDrawerStore } from '@/stores/DrawerStore'

  const drawerStore = useDrawerStore()

  const links = [
    {
      title: 'Home',
      to: '/',
      icon: 'mdi-home',
    },
    {
      title: 'Favorites',
      to: '/favorites',
      icon: 'mdi-heart',
    },
  ]
</script>

<template>
  <v-navigation-drawer v-model="drawerStore.drawer" expand-on-hover rail>
    <v-list density="compact" nav>
      <SideBarLinks :links="links" />
    </v-list>
  </v-navigation-drawer>
</template>
