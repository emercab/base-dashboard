// useTheme.js
import { ref, computed } from 'vue';

export function useTheme() {
  const currentTheme = ref('light'); // Tema por defecto

  const themes = {
    light: {
      bg1: 'bg-white',
      bg2: 'bg-sky-50',
      bg3: 'bg-blue-100',
      text: 'text-gray-900',
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white',
      success: 'bg-emerald-500 text-white',
      danger: 'bg-red-500 text-white',
      menuItem: 'bg-gray-200 text-gray-900',
      menuItemActive: 'bg-gray-300 text-gray-800',
      headerColors: 'bg-gray-100 text-gray-800',
      footerColors: 'bg-gray-100 text-gray-800',
    },
    dark: {
      bg1: 'bg-gray-900',
      bg2: 'bg-gray-800',
      bg3: 'bg-blue-900',
      text: 'text-white',
      primary: 'bg-blue-700 text-white',
      secondary: 'bg-gray-700 text-white',
      success: 'bg-emerald-600 text-white',
      danger: 'bg-red-600 text-white',
      menuItem: 'bg-gray-800 text-gray-200',
      menuItemActive: 'bg-gray-700 text-gray-100',
      headerColors: `bg-gray-800 text-gray-200`,
      footerColors: 'bg-gray-800 text-gray-200',
    }
  };

  const theme = computed(() => themes[currentTheme.value]);

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  };

  return {
    currentTheme,
    theme,
    toggleTheme
  };
}