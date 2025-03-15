export const setTheme = theme => {
  const root = document.documentElement;
  
  // Set the main theme colors
  root.style.setProperty("--primary-color", theme.primary);
  root.style.setProperty("--secondary-color", theme.secondary);
  root.style.setProperty("--text-color", theme.text);
  root.style.setProperty("--link-color", theme.link);
  
  // Set RGB values for the primary color for use in rgba functions
  const primaryRgb = hexToRgb(theme.primary);
  const textRgb = hexToRgb(theme.text);
  root.style.setProperty("--primary-color-rgb", primaryRgb || "34, 174, 195");
  root.style.setProperty("--text-color-rgb", textRgb || "52, 90, 205");
  
  // Set the gradient background
  document.body.style.background = `linear-gradient(180deg, ${theme.primary} 0%, ${theme.secondary} 100%) no-repeat`;
  document.body.style.minHeight = '100vh';
  
  // Set the text color for the body
  document.body.style.color = theme.text;
};

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  // If it's already in rgba format, extract RGB values
  if (hex && hex.startsWith && hex.startsWith('rgba')) {
    const rgbaValues = hex.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
    if (rgbaValues) {
      return `${rgbaValues[1]}, ${rgbaValues[2]}, ${rgbaValues[3]}`;
    }
  }

  // Remove # if present
  if (!hex) return null;
  hex = hex.replace('#', '');
  
  // Convert 3-digit hex to 6-digit
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Return RGB values as string if valid
  return isNaN(r) || isNaN(g) || isNaN(b) ? null : `${r}, ${g}, ${b}`;
}
