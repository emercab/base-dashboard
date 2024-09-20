<template>
  <RouterLink to="/" @click="setActive">
    <div class="flex items-center gap-2 mb-6">
      <img src="https://emersoncabrera.com/img/logo.png" alt="Logo" class="h-8" />
      <span class="text-2xl font-bold" :style="logoStyle">Logo</span>
    </div>
  </RouterLink>
</template>

<script setup>
  import { computed, inject } from 'vue';
  import { RouterLink } from 'vue-router';

  const { theme } = inject('theme');

  const emit = defineEmits(['setActive']);

  const setActive = () => {
    emit('setActive', 0);
  };

  const logoStyle = computed(() => {
    return {
      color: theme.value.primary
    }
  });

</script>

<style scoped></style>