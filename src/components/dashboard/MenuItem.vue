<template>
  <RouterLink :to="to" :style="textColor" class="">
    <li @click="onClick" :style="itemStyle" class="flex items-center cursor-pointer p-1">
      <Icon :name="icon" :color="iconColor" size="md" />
      <span>{{ label }}</span>
    </li>
  </RouterLink>
</template>

<script setup>
  import { computed, inject } from 'vue';
  
  import Icon from '../shared/Icon.vue';
  
  const { theme } = inject('theme');

  const props = defineProps({
    to: String,
    label: String,
    icon: String,
    index: Number,
    activeIndex: Number,
  });

  const emit = defineEmits(['set-active']);

  const onClick = () => emit('set-active', props.index);

  const isActive = computed(() => props.index === props.activeIndex);

  const itemStyle = computed(() => ({
    backgroundColor: isActive.value ? theme.value.primary : theme.value.bg2,
  }));

  const textColor = computed(() => ({
    color: isActive.value ? theme.value.white : theme.value.text,
  }));

  const iconColor = computed(() => (isActive.value ? theme.value.white : theme.value.text));
</script>

<style scoped></style>