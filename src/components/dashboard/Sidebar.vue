<template>
  <!-- Sidebar -->
  <aside
    class="fixed top-0 left-0 w-64 h-full p-4 space-y-1 transition-transform transform -translate-x-full lg:translate-x-0"
    :style="{ backgroundColor: theme.bg1, color: theme.text, borderRight: `3px solid ${theme.bg2}` }">

    <div class="text-2xl font-bold mb-6">Logo</div>

    <Menu>
      <MenuItem to="/" label="Dashboard" icon="home" :activeIndex="activeIndex" :index="0" @set-active="setActive" />

      <MenuItem to="/users" label="Users" icon="users" :activeIndex="activeIndex" :index="1" @set-active="setActive" />

      <MenuDropdown label="Posts" icon="folder">
        <MenuItem to="/categories" label="Categories" icon="docs" :activeIndex="activeSubItemIndex" :index="0"
          @set-active="setActiveSubItem" />

        <MenuItem to="/subcategories" label="Subcategories" icon="tag" :activeIndex="activeSubItemIndex" :index="1"
          @set-active="setActiveSubItem" />
      </MenuDropdown>

      <MenuItem to="/settings" label="Settings" icon="settings" :activeIndex="activeIndex" :index="2"
        @set-active="setActive" />
    </Menu>
  </aside>
</template>

<script setup>
  import Menu from './Menu.vue';
  import MenuItem from './MenuItem.vue';
  import MenuDropdown from './MenuDropdown.vue';
  import { ref, inject } from 'vue';

  const { theme } = inject('theme');
  const activeIndex = ref(null);
  const activeSubItemIndex = ref(null);

  const setActive = (index) => {
    activeIndex.value = index;
    activeSubItemIndex.value = null; // Desactiva subitems si hay alguno activo
  };

  const setActiveSubItem = (index) => {
    activeSubItemIndex.value = index;
  };
</script>

<style scoped>
  /* Estilos si son necesarios */
</style>
