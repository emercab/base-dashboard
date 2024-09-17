<template>
  <Aside>
    <Logo />

    <Menu>
      <!-- Menu Items -->
      <MenuItem
        :index="0" link="/" label="Dashboard" iconName="home"
        :activeIndex="activeIndex" :onClick="setActive"
      />

      <MenuItem 
        :index="1" link="/users" label="Users" iconName="users"
        :activeIndex="activeIndex" :onClick="setActive"
      />

      <!-- Dropdown -->
      <MenuDropdown 
        :index="2" label="Posts" iconName="folder" 
        :activeIndex="activeIndex" :dropdownIndex="dropdownActiveIndex" :onToggle="setDropdownActive">

        <!-- Submenu Items -->
        <MenuItem 
          :index="0" link="/categories" label="Categories" iconName="docs" iconSize="sm" textSize="sm" 
          :activeIndex="activeSubIndex" :onClick="setActiveSubItem" 
        />

        <MenuItem 
          :index="1" link="/subcategories" label="Subcategories" iconName="tag" iconSize="sm" textSize="sm" 
          :activeIndex="activeSubIndex" :onClick="setActiveSubItem" 
        />

      </MenuDropdown>

      <MenuItem 
        :index="3" link="/settings" label="Settings" iconName="settings" 
        :activeIndex="activeIndex" :onClick="setActive" 
      />

      <MenuItem 
        :index="4" link="/users" label="More Option" iconName="world" 
        :activeIndex="activeIndex" :onClick="setActive" 
      />

      <!-- Dropdown -->
      <MenuDropdown 
        :index="5" label="Dropdown" iconName="folder" 
        :activeIndex="activeIndex" :dropdownIndex="dropdownActiveIndex" :onToggle="setDropdownActive">

        <!-- Submenu Items -->
        <MenuItem 
          :index="0" link="/categories" label="Subitem 1" iconName="shopping" iconSize="sm" textSize="sm" 
          :activeIndex="activeSubIndex" :onClick="setActiveSubItem" 
        />

        <MenuItem 
          :index="1" link="/subcategories" label="Subitem 2" iconName="photo" iconSize="sm" textSize="sm" 
          :activeIndex="activeSubIndex" :onClick="setActiveSubItem" 
        />

        <MenuItem 
          :index="2" link="/categories" label="Subitem 3" iconName="mail" iconSize="sm" textSize="sm" 
          :activeIndex="activeSubIndex" :onClick="setActiveSubItem" 
        />

      </MenuDropdown>

    </Menu>
  </Aside>
</template>

<script setup>
  import { ref } from "vue";

  import Aside from "./Aside.vue";
  import Logo from "./Logo.vue";
  import Menu from "./Menu.vue";
  import MenuItem from "./MenuItem.vue";
  import MenuDropdown from "./MenuDropdown.vue";

  // Estados para manejar ítems activos, dropdowns y subitems
  const activeIndex = ref(0);
  const activeSubIndex = ref(null);
  const dropdownActiveIndex = ref(null);

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
    }
    else {
      dropdownActiveIndex.value = index; // Si no, lo activamos
    }
    activeIndex.value = null; // Desactiva cualquier ítem de menú
    activeSubIndex.value = null; // Desactiva cualquier subítem
  };

  const setActiveSubItem = (subIndex) => {
    activeSubIndex.value = subIndex;
  };
</script>
