<template>
  <!-- Header -->
  <header class="fixed top-0 left-0 right-0 h-16 shadow-lg flex justify-between items-center px-4 lg:ml-64"
    :class="[theme.bg1, theme.text]">
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
  import { ref } from 'vue';

  import { useTheme } from '@/composables/useTheme';
  import HeaderSearch from './HeaderSearch.vue';
  import HeaderThemeIcon from './HeaderIconTheme.vue';
  import HeaderIconNotifications from './HeaderIconNotifications.vue';
  import HeaderUserMenu from './HeaderUserMenu.vue';

  const { theme, toggleTheme } = useTheme();

  const isUserMenuOpen = ref(false);

  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value;
  }
</script>

<style scoped></style>