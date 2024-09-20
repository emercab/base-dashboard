import { createPalette, isColorLight, modifyColor } from '@/utils/manageColors';
import { ref, computed } from 'vue';

export function useTheme() {
  const currentTheme = ref('light'); // Default theme

  // Theme configuration
  const numColors = 10;

  // Theme colors
  const primary = '#4a9acf'
  const primaryLightPalette = createPalette(primary, 'light', numColors);
  const primaryDarkPalette = createPalette(primary, 'dark', numColors);
  const primaryText = isColorLight(primary)
    ? primaryDarkPalette[numColors - 2]
    : primaryLightPalette[numColors - 2];

  const secondary = '#364958'
  const secondaryLightPalette = createPalette(secondary, 'light', numColors);
  const secondaryDarkPalette = createPalette(secondary, 'dark', numColors);
  const secondaryText = isColorLight(secondary)
    ? secondaryDarkPalette[numColors - 2]
    : secondaryLightPalette[numColors - 2];

  const success = '#32b562'
  const successLightPalette = createPalette(success, 'light', numColors);
  const successDarkPalette = createPalette(success, 'dark', numColors);
  const successText = isColorLight(success)
    ? successDarkPalette[numColors - 2]
    : successLightPalette[numColors - 2];

  const danger = '#ef4444'
  const dangerLightPalette = createPalette(danger, 'light', numColors);
  const dangerDarkPalette = createPalette(danger, 'dark', numColors);
  const dangerText = isColorLight(danger)
    ? dangerDarkPalette[numColors - 2]
    : dangerLightPalette[numColors - 2];

  const warning = '#f4d03f'
  const warningLightPalette = createPalette(warning, 'light', numColors);
  const warningDarkPalette = createPalette(warning, 'dark', numColors);
  const warningText = isColorLight(warning)
    ? warningLightPalette[numColors - 2]
    : warningDarkPalette[numColors - 2];

  const info = '#6acaee'
  const infoLightPalette = createPalette(info, 'light', numColors);
  const infoDarkPalette = createPalette(info, 'dark', numColors);
  const infoText = isColorLight(info)
    ? infoLightPalette[numColors - 2]
    : infoDarkPalette[numColors - 2];

  // Dark and light themes info
  const themes = {
    common: {
      primary,
      secondary,
      success,
      danger,
      warning,
      info,
      primaryText,
      secondaryText,
      successText,
      dangerText,
      warningText,
      infoText,
    },
    light: {
      bg1: primaryLightPalette[primaryLightPalette.length - 1],
      bg2: modifyColor(primaryLightPalette[primaryLightPalette.length - 2], 3),
      bg3: primaryLightPalette[primaryLightPalette.length - 4],
      hover: primaryLightPalette[numColors - 3],
      text: '#021710',
      bgFooter: '#064e3b',
    },
    dark: {
      bg1: primaryDarkPalette[primaryDarkPalette.length - 1],
      bg2: modifyColor(primaryDarkPalette[primaryDarkPalette.length - 1], 7),
      bg3: primaryDarkPalette[primaryDarkPalette.length - 4],
      hover: primaryDarkPalette[numColors - 3],
      text: '#efefef',
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