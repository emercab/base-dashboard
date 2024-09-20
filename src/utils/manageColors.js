export function removeHash(hex) {
  // Remove the '#' symbol if it is present
  return hex.replace(/^#/, '');
}


export function expandHex(hex) {
  // Expand short format to long format (#abc -> #aabbcc)
  if (hex.length === 3) {
    return hex.split('').map(c => c + c).join('');
  }
  return hex;
}


export function extractRGB(hex) {
  // Extract R, G and B components using substring
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}


export function rgbToHex(r, g, b) {
  // Convert R, G and B components to hexadecimal
  const toHex = (value) => {
    const hexValue = value.toString(16).toLowerCase();
    return hexValue.length === 1 ? '0' + hexValue : hexValue;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}


export function hexToRgb(hex) {
  hex = removeHash(hex);

  hex = expandHex(hex);

  const { r, g, b } = extractRGB(hex);

  return { r, g, b };
}


export function getColorLuminance(r, g, b) {
  // Calculate the relative luminance
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}


export function isColorLight(hex) {
  hex = removeHash(hex);

  hex = expandHex(hex);

  const { r, g, b } = extractRGB(hex);

  const luminance = getColorLuminance(r, g, b);

  // Check if the color is light
  return luminance > 0.6;
}


export function hexToHsl(hex) {
  hex = removeHash(hex);

  let { r, g, b } = extractRGB(hex);
  // Convertir a valores de 0 a 1
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Gris
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: h * 360, s, l };
}


export function hslToHex(h, s, l) {
  h /= 360;

  let r, g, b;
  const hueToRgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  if (s === 0) {
    r = g = b = l; // Gris
  }
  else {
    let q = (l < 0.5) ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  return rgbToHex(r, g, b);
}


export function modifyColor(hex, percent) {
  let { h, s, l } = hexToHsl(hex);

  // Ajustar la luminosidad en función del porcentaje
  l = Math.max(0, Math.min(1, l + (percent / 100)));

  return hslToHex(h, s, l);
}


export function createPalette(hex, type = 'light', numColors = 10) {
  const palette = [hex];
  const { h, s, l } = hexToHsl(hex);
  const targetL = type === 'light' ? 1 : 0; // 1 = blanco, 0 = negro
  const step = (targetL - l) / (numColors - 1); // Calcular el incremento por paso

  for (let i = 1; i < numColors; i++) {
    const percent = step * i * 100; // Convertir el incremento a porcentaje
    const modifiedColor = modifyColor(hex, percent);
    palette.push(modifiedColor);
  }

  return palette;
}
