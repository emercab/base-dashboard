<template>
  <RouterLink :to="link" :style="textColor" class="">
    <li @click="handleClick" :style="itemStyle" class="flex items-center cursor-pointer p-1" :class="setTextSize">
      <Icon :name="iconName" :color="iconColor" bgColor="" :size="iconSize" shape="" />
      <span>{{ label }}</span>
    </li>
  </RouterLink>
</template>

<script setup>
  import { computed, inject } from 'vue';
  import Icon from '../shared/Icon.vue';

  // Props
  const props = defineProps({
    index: { type: Number, required: true },
    link: String,
    label: String,
    iconName: String,
    iconSize: { type: String, default: 'md' },
    textSize: { type: String, default: 'md' },
    activeIndex: Number,
    onClick: Function,
  });

  // Inyectamos el tema
  const { theme } = inject('theme');

  // Computed properties para estilos
  const isActive = computed(() => props.activeIndex === props.index);

  const itemStyle = computed(() => ({
    backgroundColor: isActive.value ? theme.value.primary : theme.value.bg2,
  }));

  const textColor = computed(() => ({
    color: isActive.value ? theme.value.white : theme.value.text,
  }));

  const iconColor = computed(() => isActive.value ? theme.value.white : theme.value.text);

  const setTextSize = computed(() => {
    switch (props.textSize) {
      case 'sm': return 'text-sm';
      case 'md': return 'text-base';
      case 'lg': return 'text-lg';
      case 'xl': return 'text-xl';
      default: return 'text-base';
    }
  })

  const handleClick = () => {
    props.onClick(props.index);
  };
</script>
