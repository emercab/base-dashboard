export function modifyColor(hex, percent) {
  // Remover el símbolo '#' si está presente
  hex = removeHash(hex);

  // Expandir formato corto de 3 dígitos (#abc -> #aabbcc)
  hex = expandHex(hex);

  // Extraer los componentes R, G y B
  let { r, g, b } = extractRGB(hex);

  // Calcular el ajuste basado en el porcentaje
  r = Math.min(255, Math.max(0, Math.round(r + (r * (percent / 100)))));
  g = Math.min(255, Math.max(0, Math.round(g + (g * (percent / 100)))));
  b = Math.min(255, Math.max(0, Math.round(b + (b * (percent / 100)))));

  // Convertir los componentes R, G y B a hexadecimal
  const newHex = rgbToHex(r, g, b);

  return newHex;
}

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

export function isColorLight(hex) {
  hex = removeHash(hex);

  hex = expandHex(hex);

  const { r, g, b } = extractRGB(hex);

  // Calculate the relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Check if the color is light
  const isLight = luminance > 0.5;

  return { color: hex, isLight, luminance };
}