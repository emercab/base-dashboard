<template>
  <button @click="toggleTheme">
    <Icon v-if="currentTheme === 'light'" name="moon" :color="theme.warning" :bgColor="theme.bg1" size="md" shape="circle" />
    <Icon v-if="currentTheme === 'dark'" name="sun" :color="theme.warning" :bgColor="theme.bg1" size="md" shape="circle" />
  </button>
</template>

<script setup>
  import { inject } from 'vue';

  import Icon from '@/components/shared/Icon.vue';

  const { theme, toggleTheme, currentTheme } = inject('theme');
</script>

<style scoped></style>