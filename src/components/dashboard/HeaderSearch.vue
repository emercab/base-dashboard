<template>
  <div class="flex items-center space-x-4">
    <button id="menu-button" class="lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :style="{ color: theme.text }" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    <input type="text" class="rounded-xl py-2 px-4"
      :style="{ backgroundColor: theme.bg1, color: theme.text, border: '3px solid ' + theme.bg2 }"
      placeholder="Buscar...">
  </div>
</template>

<script setup>
  import { inject } from 'vue';

  const { theme } = inject('theme');
</script>

<style scoped></style>