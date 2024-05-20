import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../constants';

export const inputFieldStyles = themeColors =>
  StyleSheet.create({
    formContainer: {
      paddingVertical: LAYOUT.paddingXLarge + LAYOUT.paddingXLarge,
      paddingHorizontal: LAYOUT.screenPadding,
    },
    header: {
      fontSize: FONT_SIZE.text4xl,
      fontWeight: '600',
      color: themeColors.text100,
      textAlign: 'center',
      marginBottom: LAYOUT.marginXLarge + LAYOUT.marginSmall,
    },
    formFieldWrapper: {
      marginBottom: LAYOUT.marginMedium,
      paddingBottom: LAYOUT.paddingLarge,
    },
    label: {
      fontSize: FONT_SIZE.textLarge,
      fontWeight: '600',
      color: themeColors.text200,
    },
    baseField: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingLeft: LAYOUT.paddingSmall,
      borderBottomColor: themeColors.primary200,
    },
    primaryIcon: themeColors.text200,
    secondaryIcon: themeColors.accent200,
    highlightIcon: themeColors.bg300,
    input: {
      flex: 1,
      fontSize: FONT_SIZE.textBase,
      color: themeColors.text100,
      paddingHorizontal: LAYOUT.paddingMedium,
    },
    placeholderText: themeColors.accent200,
    dropdownItem: themeColors.text100,
    errorText: {
      fontSize: FONT_SIZE.textSmall,
      fontWeight: '500',
      color: themeColors.error,
      marginTop: LAYOUT.elementSpacingXSmall,
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    btnForm: {
      width: DIMENSIONS.buttonWidth,
      height: DIMENSIONS.buttonHeight,
      marginTop: LAYOUT.marginXLarge,
      backgroundColor: themeColors.primary100,
      borderRadius: DIMENSIONS.borderRadiusMedium,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      elevation: SHADOWS.shadowMedium,
      shadowColor: themeColors.text200,
      overflow: 'hidden',
    },
    btnFormText: {
      fontSize: FONT_SIZE.text2xl,
      fontWeight: '500',
      color: themeColors.bg100,
    },
    btnFormDisabled: {
      backgroundColor: themeColors.bg300,
      color: themeColors.bg200,
    },
    switchFormWrapper: {
      marginTop: LAYOUT.marginXLarge,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    switchFormIcon: themeColors.accent200,
    switchFormText: {
      fontSize: FONT_SIZE.textSmall,
      fontWeight: '500',
      color: themeColors.accent200,
      marginHorizontal: LAYOUT.marginSmall,
      borderBottomWidth: 1,
      borderBottomColor: themeColors.bg300,
    },
  });
