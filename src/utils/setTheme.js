export function setTheme(theme) {
  document.documentElement.style.setProperty("--primary", theme.primary);
  document.documentElement.style.setProperty("--secondary", theme.secondary);
  document.documentElement.style.setProperty("--text-color", theme.text);
  document.documentElement.style.setProperty("--link-color", theme.link);
}
