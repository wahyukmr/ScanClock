import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../constants';

export const statusModalContentStyles = themeColors =>
  StyleSheet.create({
    modalContent: {
      flexDirection: 'column',
      width: DIMENSIONS.modalWidth,
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadius2xl,
      padding: LAYOUT.screenPadding,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowMedium,
    },
    icon: {
      alignSelf: 'center',
      marginBottom: LAYOUT.marginVerticalLarge,
    },
    modalTitle: {
      ...FONT_SIZE.text2xl,
      color: themeColors.text100,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: LAYOUT.marginVerticalMedium,
    },
    wrapperMessage: {
      flexDirection: 'row',
      marginBottom: LAYOUT.marginVerticalXSmall,
    },
    textMessage: {
      ...FONT_SIZE.textBase,
      flex: 1,
      color: themeColors.text200,
      marginLeft: LAYOUT.elementSpacingHorizontalSmall,
    },
    modalActions: {
      alignSelf: 'flex-end',
      marginTop: LAYOUT.marginVertical2x1,
    },
  });
