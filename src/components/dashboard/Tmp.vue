<template>
  <aside :class="['h-full w-64', sidebarBgColor]">
    <nav class="p-4">
      <ul>
        <!-- Ítem 1 -->
        <li @click="setActive(0)" :style="getItemStyle(0)"
          class="cursor-pointer p-2 flex items-center gap-4 rounded-md">
          <Icon name="home" :color="iconColor(0)" :size="'normal'" :bgColor="sidebarBgColor" />
          <span :style="getTextColor(0)">Dashboard</span>
        </li>

        <!-- Ítem 2 -->
        <li @click="setActive(1)" :style="getItemStyle(1)"
          class="cursor-pointer p-2 flex items-center gap-4 rounded-md">
          <Icon name="user" :color="iconColor(1)" :size="'normal'" :bgColor="sidebarBgColor" />
          <span :style="getTextColor(1)">Profile</span>
        </li>

        <!-- Ítem 3 -->
        <li @click="setActive(2)" :style="getItemStyle(2)"
          class="cursor-pointer p-2 flex items-center gap-4 rounded-md">
          <Icon name="message" :color="iconColor(2)" :size="'normal'" :bgColor="sidebarBgColor" />
          <span :style="getTextColor(2)">Messages</span>
        </li>

        <!-- Ítem 4 -->
        <li @click="setActive(3)" :style="getItemStyle(3)"
          class="cursor-pointer p-2 flex items-center gap-4 rounded-md">
          <Icon name="settings" :color="iconColor(3)" :size="'normal'" :bgColor="sidebarBgColor" />
          <span :style="getTextColor(3)">Settings</span>
        </li>

        <!-- Dropdown -->
        <li @click="toggleDropdown" :style="getItemStyle('dropdown')"
          class="cursor-pointer p-2 flex items-center gap-4 rounded-md">
          <Icon name="folder" :color="iconColor('dropdown')" :size="'normal'" :bgColor="sidebarBgColor" />
          <span :style="getTextColor('dropdown')">Dropdown</span>
          <Icon name="arrow" :color="iconColor('dropdown')" :size="'small'"
            :class="[dropdownActive ? 'rotate-180' : '']" />
        </li>

        <!-- Sub-items del dropdown -->
        <ul v-if="dropdownActive" class="pl-8">
          <li @click="setActiveDropdown(0)" :style="getItemStyle('dropdown-0')"
            class="cursor-pointer p-2 flex items-center gap-4 rounded-md">
            <Icon name="file" :color="iconColor('dropdown-0')" :size="'small'" />
            <span :style="getTextColor('dropdown-0')">Subitem 1</span>
          </li>

          <li @click="setActiveDropdown(1)" :style="getItemStyle('dropdown-1')"
            class="cursor-pointer p-2 flex items-center gap-4 rounded-md">
            <Icon name="file" :color="iconColor('dropdown-1')" :size="'small'" />
            <span :style="getTextColor('dropdown-1')">Subitem 2</span>
          </li>
        </ul>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
  import { ref, computed, inject } from 'vue';
  import Icon from '@/components/Icon.vue'; // Ruta de tu componente Icon

  // Inyectamos el tema
  const theme = inject('theme');

  // Estados para manejar ítems activos y dropdown
  const activeIndex = ref(null);
  const dropdownActive = ref(false);
  const activeDropdownIndex = ref(null);

  // Funciones para establecer los ítems activos
  const setActive = (index) => {
    activeIndex.value = index;
  };

  const isActive = (index) => {
    return activeIndex.value === index;
  };

  const setActiveDropdown = (index) => {
    activeDropdownIndex.value = index;
  };

  const isDropdownActive = (index) => {
    return activeDropdownIndex.value === index;
  };

  const toggleDropdown = () => {
    dropdownActive.value = !dropdownActive.value;
  };

  // Funciones de estilos dinámicos con :style
  const getItemStyle = (index) => {
    return {
      backgroundColor: isActive(index) || isDropdownActive(index) ? theme.bg3 : theme.bg1,
    };
  };

  const getTextColor = (index) => {
    return {
      color: isActive(index) || isDropdownActive(index) ? theme.textInverse : theme.text,
    };
  };

  const iconColor = (index) => {
    return isActive(index) || isDropdownActive(index) ? theme.textInverse : theme.text;
  };

  // Clases estáticas de estilo del sidebar
  const sidebarBgColor = computed(() => `bg-[${theme.bg2}]`);
</script>
