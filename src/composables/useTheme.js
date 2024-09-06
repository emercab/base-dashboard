// useTheme.js
import { info } from 'autoprefixer';
import { ref, computed, warn } from 'vue';

export function useTheme() {
  const currentTheme = ref('light'); // Tema por defecto

  const themes = {
    light: {
      bg1: '#fff',
      bg2: '#e1f6ef',
      bg3: '#c3ede0',
      text: '#021710',
      primary: '#10b981',
      secondary: '#557b97',
      success: '#22c55e',
      danger: '#ef4444',
      warning: '#f5ce0b',
      info: '#3bcef6',
      bgHeader: '#c3ede0',
      bgFooter: '#064e3b',
    },
    dark: {
      bg1: '#121417',
      bg2: '#1a1f26',
      bg3: '#22272e',
      text: '#fff',
      primary: '10b981',
      secondary: '#557b97',
      success: '#22c55e',
      danger: '#ef4444',
      warning: '#f5ce0b',
      info: '#3bcef6',
      bgHeader: `bg-gray-800 text-gray-200`,
      bgFooter: '#064e3b',
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