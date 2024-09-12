<template>
  <!-- Sidebar -->
  <aside
    class="fixed top-0 left-0 w-64 h-full p-4 space-y-1 transition-transform transform -translate-x-full lg:translate-x-0"
    :style="{ backgroundColor: theme.bg1, color: theme.text, borderRight: `3px solid ${theme.bg2}` }">

    <div class="text-2xl font-bold mb-6">Logo</div>

    <nav class="rounded-lg" :style="{ backgroundColor: theme.bg2, color: theme.text }">
      <ul class="py-2">
        <!-- Ítem 1 -->
        <RouterLink to="/" :style="textColor(0)" class="">
          <li @click="setActive(0)" :style="itemStyle(0)" class="flex items-center cursor-pointer p-1">
            <Icon name="home" :color="iconColor(0)" bgColor="" size="md" shape="" />
            <span>Dashboard</span>
          </li>
        </RouterLink>

        <!-- Ítem 2 -->
        <RouterLink to="/users" :style="textColor(1)" class="">
          <li @click="setActive(1)" :style="itemStyle(1)" class="flex items-center cursor-pointer p-1">
            <Icon name="users" :color="iconColor(1)" bgColor="" size="md" shape="" />
            <span>Users</span>
          </li>
        </RouterLink>

        <!-- Dropdown -->
        <li @click="toggleDropdown" :style="dropdownStyle"
          class="flex justify-between items-center cursor-pointer p-1">
          <div class="flex items-center gap-2">
            <Icon name="folder" :color="dropdownIconColor" size="md" bgColor="" />
            <span>Posts</span>
          </div>
          <Icon name="arrowRight" color="" size="sm" :class="[dropdownActive ? 'rotate-90' : '']" />
        </li>

        <!-- Sub-items del dropdown -->
        <ul v-if="dropdownActive" class="pl-6 transition-all duration-300">
          <!-- Item 1 del dropdown -->
          <RouterLink to="/categories" class="text-sm" :style="subItemTextColor(0)">
            <li @click="setActiveSubItem(0)" :style="subItemStyle(0)"
              class="flex items-center gap-2 cursor-pointer p-1">
              <Icon name="docs" :color="subItemIconColor(0)" size="sm" />
              <span>Categories</span>
            </li>
          </RouterLink>

          <!-- Item 2 del dropdown -->
          <RouterLink to="/subcategories" class="text-sm" :style="subItemTextColor(1)">
            <li @click="setActiveSubItem(1)" :style="subItemStyle(1)"
              class="flex items-center gap-2 cursor-pointer p-1">
              <Icon name="tag" :color="subItemIconColor(1)" size="sm" />
              <span>Subcategories</span>
            </li>
          </RouterLink>
        </ul> <!-- End Sub-items del dropdown -->

        <!-- Ítem 3 -->
        <RouterLink to="/settings" :style="textColor(2)" class="">
          <li @click="setActive(2)" :style="itemStyle(2)" class="flex items-center cursor-pointer p-1">
            <Icon name="settings" :color="iconColor(2)" bgColor="" size="md" shape="" />
            <span>Settings</span>
          </li>
        </RouterLink>

      </ul>
    </nav>
  </aside>
  <!-- End Sidebar -->
</template>

<script setup>
  import { ref, inject, computed } from 'vue';
  import { RouterLink } from 'vue-router';
  import Icon from '../shared/Icon.vue';

  // Inyectamos el tema
  const { theme } = inject('theme');

  // Estados para manejar ítems activos, dropdown y subitems
  const activeIndex = ref(null);
  const activeSubItemIndex = ref(null);
  const dropdownActive = ref(false);

  // Función para manejar ítems activos
  const setActive = (index) => {
    activeIndex.value = index;
    dropdownActive.value = false; // Cierra el dropdown si está abierto
    activeSubItemIndex.value = null; // Desactiva subitems si hay alguno activo
  };

  const isActive = (index) => {
    return activeIndex.value === index;
  };

  // Función para manejar el dropdown
  const toggleDropdown = () => {
    dropdownActive.value = !dropdownActive.value;
    // desactivar ítem activo si se abre el dropdown
    if (dropdownActive.value) {
      activeIndex.value = null;
    }
  };

  const dropdownStyle = computed(() => ({
    backgroundColor: dropdownActive.value ? theme.value.primary : theme.value.bg2,
    color: dropdownActive.value ? theme.value.white : theme.value.text,
  }));

  const dropdownIconColor = computed(() => dropdownActive.value ? theme.value.white : theme.value.text);

  // Función para manejar subitems activos
  const setActiveSubItem = (index) => {
    activeSubItemIndex.value = index;
  };

  const isSubItemActive = (index) => {
    return activeSubItemIndex.value === index;
  };

  // Funciones para obtener estilos de subitems
  const subItemStyle = (index) => ({
    backgroundColor: isSubItemActive(index) ? theme.value.primary : theme.value.bg2,
  });

  const subItemTextColor = (index) => ({
    color: isSubItemActive(index) ? theme.value.white : theme.value.text,
  });

  const subItemIconColor = (index) => (isSubItemActive(index) ? theme.value.white : theme.value.text);

  // Funciones para obtener el estilo del ítem activo
  const itemStyle = (index) => {
    if (isActive(index)) {
      return { backgroundColor: theme.value.primary };
    }
    return { backgroundColor: theme.value.bg2 };
  };

  const textColor = (index) => {
    if (isActive(index)) {
      return { color: theme.value.white };
    }
    return { color: theme.value.text };
  };

  const iconColor = (index) => {
    return isActive(index) ? theme.value.white : theme.value.text;
  };

</script>

<style scoped>
  /* Estilos adicionales si es necesario */
</style>
