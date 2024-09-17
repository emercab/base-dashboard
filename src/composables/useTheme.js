// useTheme.js
import { ref, computed } from 'vue';

export function useTheme() {
  const currentTheme = ref('light'); // Tema por defecto

  const themes = {
    common: {
      primary: '#169873',
      secondary: '#364958',
      success: '#22c55e',
      danger: '#ef4444',
      warning: '#f5ce0b',
      info: '#59d2fe',
      white: '#fff',
      primaryText: '#bbddce',
      secondaryText: '#dbdee1',
      successText: '#e1f6e3',
      dangerText: '#f9b9b9',
      warningText: '#fff6dc',
      infoText: '#e9f8ff',
    },
    light: {
      bg1: '#fff',
      bg2: '#f7f7f7',
      bg3: '#e5e5e5',
      text: '#021710',
      bgFooter: '#064e3b',
    },
    dark: {
      bg1: '#121417',
      bg2: '#1a1f26',
      bg3: '#22272e',
      text: '#fff',
      bgFooter: '#064e3b',
    }
  };

  const theme = computed(() => {
    const fullTheme = { ...themes.common, ...themes[currentTheme.value] };
    return fullTheme;
  });

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  };

  return {
    currentTheme,
    theme,
    toggleTheme
  };
}