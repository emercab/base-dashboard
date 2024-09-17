<template>
  <span class="px-2 py-1 leading-none rounded-md" :style="badgeStyle">
    {{ text }}
  </span>
</template>

<script setup>

  import { computed, inject } from 'vue';

  import { isColorLight, modifyColor } from '@/utils/manageColors';

  const { theme } = inject('theme');

  const props = defineProps({
    text: String,
    color: { type: String, default: 'primary' },
    size: { type: String, default: 'xs' },
    iconName: { type: String, default: '' },
    iconColor: { type: String, default: '' },
  });

  const badgeStyle = computed(() => {
    const color = props.color
    let bgColor = ''
    let textColor = ''

    // Set the badge color based on the color prop
    switch (color) {
      case 'primary':
        textColor = theme.value.primary;
        bgColor = theme.value.primaryText;
        break;
      case 'secondary':
        textColor = theme.value.secondary;
        bgColor = theme.value.secondaryText;
        break;
      case 'success':
        textColor = theme.value.success;
        bgColor = theme.value.successText;
        break;
      case 'danger':
        textColor = theme.value.danger;
        bgColor = theme.value.dangerText;
        break;
      case 'warning':
        textColor = theme.value.warning;
        bgColor = theme.value.warningText;
        break;
      case 'info':
        textColor = theme.value.info;
        bgColor = theme.value.infoText;
        break;
      case '':
        textColor = theme.value.primary;
        bgColor = theme.value.primaryText;
        break;
      default:
        textColor = color;
        bgColor = isColorLight(color) ? modifyColor(color, -50) : bgColor = modifyColor(color, 50);
        break;
    }

    // Set the font size based on the prop
    let fontSize = ''

    switch (props.size) {
      case 'xs': fontSize = '0.75rem'; break;
      case 'sm': fontSize = '0.875rem'; break;
      case 'md': fontSize = '1rem'; break;
      case 'lg': fontSize = '1.125rem'; break;
      case 'xl': fontSize = '1.25rem'; break;
      default: fontSize = '0.75rem'; break; // Default to xs
    }

    return {
      backgroundColor: bgColor,
      color: textColor,
      border: `1px solid ${textColor}`,
      fontSize: fontSize,
    };
  });

</script>

<style scoped></style>