<template>
  <div :class="[theme.bg1, 'p-4 rounded shadow']">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import { useTheme } from '@/composables/useTheme';

  const { theme } = useTheme();

  const props = defineProps({
    title: String,
    content: String,
  });
</script>

<style scoped></style>