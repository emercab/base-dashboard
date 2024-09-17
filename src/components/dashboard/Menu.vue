<template>
  <nav class="rounded-lg" :style="{ backgroundColor: theme.bg1, color: theme.text }">
    <ul class="py-2">
      <slot></slot>
    </ul>
  </nav>
</template>

<script setup>
  import { inject } from 'vue';

  const { theme } = inject('theme');
</script>

<style scoped></style>