export const getIcon = (selectedTheme, theme) => {
  return selectedTheme === theme
    ? 'checkbox-intermediate'
    : 'checkbox-blank-outline';
};
