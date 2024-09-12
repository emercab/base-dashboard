<template>
  <div v-html="svgIcon" :class="[sizeClasses, shapeClasses, 'p-1 w- flex items-center justify-center']"
    :style="{ backgroundColor: iconBgColor, color: iconColor }">
  </div>
</template>

<script setup>
  import { icons } from '@/assets/icons';
  import { computed, inject } from 'vue';

  const theme = inject('theme');

  const props = defineProps({
    name: { type: String, required: true, },
    color: { type: String, default: '' }, // Color por defecto
    bgColor: { type: String, default: '' }, // Color de fondo
    size: { type: String, default: 'md' }, // Valores: 'xs' 'sm', 'md', 'lg', 'xl', '2xl'
    shape: { type: String, default: 'square', }, // Valores: 'square', 'circle', 'rounded'
  });

  const svgIcon = computed(() => icons[props.name]);

  const iconColor = computed(() => props.color || theme.text); // Usar color del tema si no se especifica

  const iconBgColor = computed(() => props.bgColor);

  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'xs': return 'w-5 h-5';
      case 'sm': return 'w-7 h-7';
      case 'lg': return 'w-12 h-12';
      case 'xl': return 'w-16 h-16';
      case '2xl': return 'w-24 h-24';
      default: return 'w-9 h-9'; // 'md' por defecto si no se especifica
    }
  });

  const shapeClasses = computed(() => {
    switch (props.shape) {
      case 'circle': return 'rounded-full';
      case 'rounded': return 'rounded-lg';
      default: return 'rounded-none';
    }
  });

</script>

<style scoped>
  /* Puedes añadir estilos adicionales aquí si es necesario */
</style>
