import React, {useState} from 'react';
import {useThemeContext} from '../../../hooks';
import ThemeContentOption from './ThemeContentOption';

const ThemeContent = ({onThemeChange}) => {
  const {themeColors, themePreferences} = useThemeContext();

  const [selectedTheme, setSelectedTheme] = useState(themePreferences);

  const handleThemeSelect = newTheme => {
    setSelectedTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <>
      <ThemeContentOption
        theme="system"
        handleThemeSelect={handleThemeSelect}
        selectedTheme={selectedTheme}
        themeColors={themeColors}
        themeLabel="Default sistem"
      />
      <ThemeContentOption
        theme="light"
        handleThemeSelect={handleThemeSelect}
        selectedTheme={selectedTheme}
        themeColors={themeColors}
        themeLabel="Terang"
      />
      <ThemeContentOption
        theme="dark"
        handleThemeSelect={handleThemeSelect}
        selectedTheme={selectedTheme}
        themeColors={themeColors}
        themeLabel="Gelap"
      />
    </>
  );
};

export default ThemeContent;
