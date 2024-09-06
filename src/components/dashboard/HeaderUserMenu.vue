<template>
  <!-- User Menu -->
  <div class="relative">
    <a onclick="toggleUserMenu()" class="flex items-center cursor-pointer">
      <img src="https://via.placeholder.com/32" alt="Avatar" class="rounded-full h-8 w-8">
      <span class="ml-2">John Doe</span>
    </a>
    <div id="user-menu" class="hidden absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
      <a href="#" class="block py-2 px-4 hover:bg-gray-100">View Profile</a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-100">Logout</a>
    </div>
  </div>
  <!-- End User Menu -->
</template>

<script setup>

</script>

<style scoped></style>