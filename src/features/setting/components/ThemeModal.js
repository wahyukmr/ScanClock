import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ModalActionBtn} from '../../../components';
import {useThemeContext} from '../../../hooks';
import {goBack} from '../../../navigation/NavigationServices';
import {themeModalStyles} from './ThemeModal.styles';
import ThemeModalOption from './ThemeModalOption';

const ThemeModal = () => {
  const {styles, themeColors, themePreferences, setColorTheme} =
    useThemeContext(themeModalStyles);

  const [selectedTheme, setSelectedTheme] = useState(themePreferences);

  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Pilih tema</Text>
      <ThemeModalOption
        theme="system"
        handleThemeSelect={setSelectedTheme}
        selectedTheme={selectedTheme}
        themeColors={themeColors}
        themeLabel="Default sistem"
      />
      <ThemeModalOption
        theme="light"
        handleThemeSelect={setSelectedTheme}
        selectedTheme={selectedTheme}
        themeColors={themeColors}
        themeLabel="Terang"
      />
      <ThemeModalOption
        theme="dark"
        handleThemeSelect={setSelectedTheme}
        selectedTheme={selectedTheme}
        themeColors={themeColors}
        themeLabel="Gelap"
      />
      <View style={styles.modalActions}>
        <ModalActionBtn onPress={goBack} themeColors={themeColors}>
          Batal
        </ModalActionBtn>
        <ModalActionBtn
          onPress={() => {
            setColorTheme(selectedTheme);
            goBack();
          }}
          themeColors={themeColors}>
          OKE
        </ModalActionBtn>
      </View>
    </View>
  );
};

export default ThemeModal;
