<template>
  <div class="relative">
    <a @click="toggleUserMenu" class="flex items-center cursor-pointer">
      <img src="https://emersoncabrera.com/img/emerson-cabrera.png" alt="Avatar" class="rounded-full h-8 w-8">
      <span class="ml-2">John Doe</span>
    </a>
    <!-- User Menu -->
    <div 
      class="absolute right-0 mt-2 w-48 rounded shadow-lg"
      :class="{ 'hidden': !showUserMenu }"
      :style="{ backgroundColor: theme.bg1, color: theme.text, border: '1px solid ' + theme.bg2 }"
    >
      <a href="#" class="block py-2 px-4 hover:bg-gray-100">View Profile</a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-100">Logout</a>
    </div>
    <!-- End User Menu -->
  </div>
</template>

<script setup>
  import { inject, ref } from 'vue'

  const showUserMenu = ref(false)
  const { theme } = inject('theme')

  const toggleUserMenu = () => {
    showUserMenu.value = !showUserMenu.value
  }
</script>

<style scoped></style>