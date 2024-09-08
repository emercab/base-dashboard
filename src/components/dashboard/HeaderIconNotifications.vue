<template>
  <button>
    <Icon name="bell" :color="theme.secondary" :bgColor="theme.bg1" size="md" shape="rounded" />

  </button>
</template>

<script setup>
  import { inject } from 'vue';

  import Icon from '../shared/Icon.vue';

  const { theme } = inject('theme');
</script>

<style scoped></style>