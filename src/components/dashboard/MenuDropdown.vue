<template>
  <li @click="toggleDropdown" :style="dropdownStyle" class="flex justify-between items-center cursor-pointer p-1">
    <div class="flex items-center gap-2">
      <Icon :name="iconName" :color="dropdownIconColor" size="md" bgColor="" />
      <span>{{ label }}</span>
    </div>
    <Icon name="arrowRight" color="" size="sm" :class="[isActive ? 'rotate-90' : '']" />
  </li>

  <ul v-if="isActive" class="transition-all duration-300">
    <slot></slot>
  </ul>
</template>

<script setup>
  import { computed, inject, ref, watch } from 'vue';
  import Icon from '../shared/Icon.vue';

  // Props
  const props = defineProps({
    index: Number,
    label: String,
    iconName: String,
    activeIndex: Number,
    dropdownIndex: Number,
    onToggle: Function, // Manejador para cambiar el estado
  });

  const { theme } = inject('theme');

  // Variables
  const isDropdownActive = ref(false);

  // Computed para verificar si el dropdown está activo
  const isActive = computed(() => props.dropdownIndex === props.index);

  // Computed para el estilo del dropdown
  const dropdownStyle = computed(() => ({
    backgroundColor: isActive.value ? theme.value.primary : theme.value.bg2,
    color: isActive.value ? theme.value.white : theme.value.text,
  }));

  const dropdownIconColor = computed(() => (isActive.value ? theme.value.white : theme.value.text));

  // Función para alternar el estado del dropdown
  const toggleDropdown = () => {
    if (isActive.value) {
      props.onToggle(null); // Cierra si está activo
    } else {
      props.onToggle(props.index); // Abre si está inactivo
    }
  };

  // Observador para cambiar el estado del dropdown cuando cambia el índice activo
  watch(() => props.activeIndex, () => {
    if (props.activeIndex !== props.index) {
      isDropdownActive.value = false;
    }
  });
</script>
