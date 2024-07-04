import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS, LAYOUT, ROUTE} from '../../../constants';
import {useModalContext} from '../../../hooks';
import {navigate} from '../../../navigation/NavigationServices';
import ThemeModal from './ThemeModal';
import {ThemeSettingStyles} from './ThemeSetting.styles';

const ThemeSetting = ({themeColors, isDark, isSystemTheme}) => {
  const styles = ThemeSettingStyles(themeColors);
  const {openModal} = useModalContext();

  return (
    <TouchableHighlight
      underlayColor={themeColors.bg200}
      style={{
        paddingLeft: LAYOUT.screenPadding + LAYOUT.paddingSmall,
        paddingRight: LAYOUT.screenPadding,
      }}
      onPress={() => {
        openModal(ThemeModal);
        navigate(ROUTE.dynamicModal);
      }}>
      <View style={styles.btnContentWrapper}>
        <CustomIcon
          name="theme-light-dark"
          size={DIMENSIONS.iconMedium}
          color={themeColors.text200}
        />
        <View>
          <Text style={styles.btnContentLabel}>Tema</Text>
          <Text style={styles.btnContentValue}>
            {isSystemTheme ? 'Default sistem' : isDark ? 'Gelap' : 'Terang'}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ThemeSetting;
