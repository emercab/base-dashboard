<template>
  <li @click="toggleDropdown" :style="dropdownStyle" class="flex justify-between items-center cursor-pointer p-1">
    <div class="flex items-center gap-2">
      <Icon :name="icon" :color="dropdownIconColor" size="md" />
      <span>{{ label }}</span>
    </div>
    <Icon name="arrowRight" :class="[dropdownActive ? 'rotate-90' : '']" size="sm" />
  </li>

  <ul v-if="dropdownActive" class="pl-6 transition-all duration-300">
    <slot></slot>
  </ul>
</template>

<script setup>
  import { ref, computed, inject } from 'vue';
  
  import Icon from '../shared/Icon.vue';

  const { theme } = inject('theme');
  
  const props = defineProps({
    label: String,
    icon: String,
  });

  const dropdownActive = ref(false);
  
  const toggleDropdown = () => {
    dropdownActive.value = !dropdownActive.value;
  };

  const dropdownStyle = computed(() => ({
    backgroundColor: dropdownActive.value ? theme.value.primary : theme.value.bg2,
    color: dropdownActive.value ? theme.value.white : theme.value.text,
  }));

  const dropdownIconColor = computed(() => dropdownActive.value ? theme.value.white : theme.value.text);
</script>
