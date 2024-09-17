<template>
  <div class="p-4 rounded-lg" :style="widgetStyle">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
  import { computed, inject } from 'vue';

  const { theme } = inject('theme');

  const props = defineProps({
    title: String,
    content: String,
  });

  const widgetStyle = computed(() => ({
    backgroundColor: theme.value.bg1,
    color: theme.value.text,
    border: `1px solid ${theme.value.bg3}`,
  }));

</script>

<style scoped></style>