<template>
  <div class="p-4 rounded-xl shadow" :style="{ background: theme.bg1, color: theme.text }">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
  import { inject } from 'vue';

  const props = defineProps({
    title: String,
    content: String,
  });

  const { theme } = inject('theme');
</script>

<style scoped></style>