<template>
  <!-- Sidebar -->
  <aside id="sidebar"
    class="fixed top-0 left-0 w-64 h-full p-4 space-y-4 transition-transform transform -translate-x-full lg:translate-x-0"
    :style="{ backgroundColor: theme.bg1, color: theme.text, borderRight: `3px solid ${theme.bg2}` }">
    <div class="text-2xl font-bold mb-6">Logo</div>
    <nav class="space-y-4 rounded-lg" :style="{ backgroundColor: theme.bg1, color: theme.text }">
      <RouterLink
        to="/" class="block py-2 px-4 rounded"
      >
        Home
      </RouterLink>
      <RouterLink to="/users" class="block py-2 px-4 hover:bg-blue-700 rounded">Users</RouterLink>
      <RouterLink to="/posts" class="block py-2 px-4 hover:bg-blue-700 rounded">Posts</RouterLink>
      <div class="dropdown">
        <button onclick="toggleDropdown()"
          class="w-full flex justify-between items-center py-2 px-4 hover:bg-blue-700 rounded">
          More
          <span id="dropdown-icon" class="ml-2 transition-transform transform">&#9662;</span>
        </button>
        <div id="dropdown-menu" class="hidden space-y-2 mt-2 pl-4">
          <a href="#" class="block py-2 px-4 hover:bg-blue-700 rounded">Item 1</a>
          <a href="#" class="block py-2 px-4 hover:bg-blue-700 rounded">Item 2</a>
        </div>
      </div>
      <a href="#" class="block py-2 px-4 hover:bg-blue-700 rounded">Blog</a>
    </nav>
  </aside>
  <!-- End Sidebar -->
</template>

<script setup>
  import { inject } from 'vue';
  import { RouterLink } from 'vue-router';

  const { theme } = inject('theme');
</script>

<style scoped></style>