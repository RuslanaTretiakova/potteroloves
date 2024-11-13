<script lang="ts" setup></script>

<template>
  <v-app>
    <v-responsive>
      <TopNavbar />
      <v-main>
        <slot />
      </v-main>
    </v-responsive>
  </v-app>
</template>
