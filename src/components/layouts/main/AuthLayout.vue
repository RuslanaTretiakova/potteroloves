<script lang="ts" setup></script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <TopNavbar />
      <Navigation />
      <v-main>
        <slot />
      </v-main>
    </v-app>
  </v-responsive>
</template>
