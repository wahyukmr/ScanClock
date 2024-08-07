import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS, LAYOUT} from '../../../constants';
import {getIcon} from '../Setting.helpers';
import {themeContentOptionStyles} from './ThemeContentOption.styles';

const ThemeContentOption = ({
  theme,
  themeLabel,
  selectedTheme,
  handleThemeSelect,
  themeColors,
}) => {
  const styles = themeContentOptionStyles(themeColors);

  return (
    <TouchableHighlight
      underlayColor={themeColors.bg300}
      style={{paddingHorizontal: LAYOUT.paddingHorizontalLarge}}
      onPress={() => handleThemeSelect(theme)}>
      <View style={styles.modalOption}>
        <CustomIcon
          name={getIcon(selectedTheme, theme)}
          size={DIMENSIONS.iconMedium}
          color={
            selectedTheme === theme
              ? themeColors.primary200
              : themeColors.text200
          }
        />
        <Text style={styles.modalOptionText}>{themeLabel}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ThemeContentOption;
