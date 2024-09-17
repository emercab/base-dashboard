<template>
  <aside
    class="fixed top-0 left-0 w-64 h-full p-4 space-y-1 transition-transform transform -translate-x-full lg:translate-x-0"
    :style="{ backgroundColor: theme.bg1, color: theme.text, borderRight: `1px solid ${theme.bg3}` }">
    <slot></slot>
  </aside>
</template>

<script setup>
  import { inject } from 'vue';

  const { theme } = inject('theme');
</script>

<style scoped></style>