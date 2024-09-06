<template>
  <!-- Header -->
  <header class="fixed top-0 left-0 right-0 h-16 flex justify-between items-center px-4 lg:ml-64"
    :style="{backgroundColor: theme.bg2, color: theme.text}">
    <HeaderSearch />

    <div class="flex items-center space-x-4">
      <HeaderThemeIcon />

      <HeaderIconNotifications />

      <HeaderUserMenu />
    </div>

  </header>
  <!-- End Header -->
</template>

<script setup>
  import { inject, ref } from 'vue';

  import HeaderSearch from './HeaderSearch.vue';
  import HeaderThemeIcon from './HeaderIconTheme.vue';
  import HeaderIconNotifications from './HeaderIconNotifications.vue';
  import HeaderUserMenu from './HeaderUserMenu.vue';

  const { theme, toggleTheme } = inject('theme');

  const isUserMenuOpen = ref(false);

  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value;
  }
</script>

<style scoped></style>