import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const SettingOptionsWrapperStyles = () =>
  StyleSheet.create({
    title: {
      ...FONT_SIZE.textSmall,
      fontWeight: '500',
      paddingHorizontal: LAYOUT.screenPadding,
    },
    btnAction: {
      paddingLeft: LAYOUT.paddingHorizontal2x1,
      paddingRight: LAYOUT.screenPadding,
    },
  });
