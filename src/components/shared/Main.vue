<template>
  <main class="pt-20 lg:ml-64 p-4" :style="{ backgroundColor: theme.bg2, color: theme.text }">
    <slot></slot>
  </main>
</template>

<script setup>
  import { inject } from 'vue';

  const { theme } = inject('theme');
</script>

<style scoped></style>