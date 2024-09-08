<template>
  <aside :class="['h-full w-64', sidebarBgColor]">
    <nav class="p-4">
      <ul>
        <!-- Ítem 1 -->
        <li v-for="(item, index) in menuItems" :key="index" @click="setActive(index)"
          :class="[isActive(index) ? activeItemClass : '', 'cursor-pointer p-2 flex items-center gap-4 rounded-md']">
          <Icon :name="item.icon" :color="itemColor" :size="'normal'" :bgColor="sidebarBgColor" />
          <span :class="itemTextClass">{{ item.name }}</span>
        </li>

        <!-- Dropdown -->
        <li @click="toggleDropdown"
          :class="['cursor-pointer p-2 flex items-center gap-4 rounded-md', dropdownActive ? activeItemClass : '']">
          <Icon name="folder" :color="itemColor" :size="'normal'" :bgColor="sidebarBgColor" />
          <span :class="itemTextClass">Dropdown</span>
          <Icon name="arrow" :color="itemColor" :size="'small'" :class="[dropdownActive ? 'rotate-180' : '']" />
        </li>
        <!-- Sub-items del dropdown -->
        <ul v-if="dropdownActive" class="pl-8">
          <li v-for="(subItem, subIndex) in dropdownItems" :key="subIndex" @click="setActiveDropdown(subIndex)"
            :class="[isDropdownActive(subIndex) ? activeItemClass : '', 'cursor-pointer p-2 flex items-center gap-4 rounded-md']">
            <Icon :name="subItem.icon" :color="itemColor" :size="'small'" />
            <span :class="itemTextClass">{{ subItem.name }}</span>
          </li>
        </ul>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
  import { ref, computed, inject } from 'vue';
  import Icon from '@/components/Icon.vue'; // Asegúrate de que la ruta sea correcta

  // Inyectamos el tema desde el proveedor global
  const theme = inject('theme');

  // Definir los ítems de menú
  const menuItems = [
    { name: 'Dashboard', icon: 'home' },
    { name: 'Profile', icon: 'user' },
    { name: 'Messages', icon: 'message' },
    { name: 'Settings', icon: 'settings' }
  ];

  // Definir los ítems del dropdown
  const dropdownItems = [
    { name: 'Subitem 1', icon: 'file' },
    { name: 'Subitem 2', icon: 'file' }
  ];

  // Estado para el ítem de menú activo
  const activeIndex = ref(null);

  // Estado para el dropdown
  const dropdownActive = ref(false);
  const activeDropdownIndex = ref(null);

  // Manejar clics en el menú para activar ítems
  const setActive = (index) => {
    activeIndex.value = index;
  };

  const isActive = (index) => {
    return activeIndex.value === index;
  };

  // Manejar el estado del dropdown
  const toggleDropdown = () => {
    dropdownActive.value = !dropdownActive.value;
  };

  const setActiveDropdown = (index) => {
    activeDropdownIndex.value = index;
  };

  const isDropdownActive = (index) => {
    return activeDropdownIndex.value === index;
  };

  // Clases dinámicas basadas en el tema
  const sidebarBgColor = computed(() => `bg-[${theme.bg2}]`);
  const itemColor = computed(() => theme.text);
  const activeItemClass = computed(() => `bg-[${theme.bg3}] text-[${theme.textInverse}]`);
  const itemTextClass = computed(() => `text-[${theme.text}]`);
</script>

<style scoped>
  /* Agregar estilos adicionales si es necesario */
</style>
