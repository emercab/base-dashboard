<template>
  <aside
    class="fixed top-0 left-0 w-64 h-full p-4 space-y-1 transition-transform transform -translate-x-full lg:translate-x-0"
    :style="{ backgroundColor: theme.bg1, color: theme.text, borderRight: `3px solid ${theme.bg2}` }">

    <div class="text-2xl font-bold mb-6">Logo</div>

    <nav class="rounded-lg" :style="{ backgroundColor: theme.bg2, color: theme.text }">
      <ul class="py-2">
        <!-- Menu Items -->
        <MenuItem v-for="(item, index) in menuItems" :key="index" :index="index" :link="item.link" :label="item.label"
          :iconName="item.icon" :activeIndex="activeIndex" :onClick="setActive" />

        <!-- Dropdowns -->
        <MenuDropdown v-for="(dropdown, index) in dropdowns" :key="index" :index="index + menuItems.length"
          :label="dropdown.label" :iconName="dropdown.icon" :activeIndex="activeIndex"
          :dropdownIndex="dropdownActiveIndex" :onToggle="setDropdownActive">
          <MenuItem v-for="(subItem, subIndex) in dropdown.subItems" :key="subIndex" :index="subIndex"
            :link="subItem.link" :label="subItem.label" :iconName="subItem.icon" iconSize="sm" textSize="sm" :activeIndex="activeSubIndex"
            :onClick="setActiveSubItem" />
        </MenuDropdown>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
  import { ref, inject } from 'vue';
  import MenuItem from './MenuItem.vue';
  import MenuDropdown from './MenuDropdown.vue';

  // Inyectamos el tema
  const { theme } = inject('theme');

  // Estados para manejar ítems activos, dropdowns y subitems
  const activeIndex = ref(0);
  const activeSubIndex = ref(null);
  const dropdownActiveIndex = ref(null);

  // Definimos los ítems y dropdowns
  const menuItems = [
    { link: '/', label: 'Dashboard', icon: 'home' },
    { link: '/users', label: 'Users', icon: 'users' },
    { link: '/settings', label: 'Settings', icon: 'settings' },
  ];

  const dropdowns = [
    {
      label: 'Posts',
      icon: 'folder',
      subItems: [
        { link: '/categories', label: 'Categories', icon: 'docs' },
        { link: '/subcategories', label: 'Subcategories', icon: 'tag' },
      ],
    },
  ];

  // Funciones para manejar ítems activos
  const setActive = (index) => {
    activeIndex.value = index;
    activeSubIndex.value = null; // Desactiva los subítems
    dropdownActiveIndex.value = null; // Desactiva cualquier dropdown abierto
  };

  // Función para manejar dropdowns activos
  const setDropdownActive = (index) => {
    if (dropdownActiveIndex.value === index) {
      dropdownActiveIndex.value = null; // Si ya está activo, lo cerramos
    } else {
      dropdownActiveIndex.value = index; // Si no, lo activamos
    }
    activeIndex.value = null; // Desactiva cualquier ítem de menú
  };

  const setActiveSubItem = (subIndex) => {
    activeSubIndex.value = subIndex;
  };
</script>
