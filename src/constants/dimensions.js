import {Dimensions} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../utils/scales';

const {height, width} = Dimensions.get('window');

export const DIMENSIONS = {
  windowHeight: height,
  windowWidth: width,

  borderRadiusSmall: moderateScale(4),
  borderRadiusMedium: moderateScale(8),
  borderRadiusLarge: moderateScale(12),
  borderRadiusXLarge: moderateScale(16),
  borderRadius2xl: moderateScale(32),
  borderRadius3xl: moderateScale(48),

  buttonHeight: verticalScale(55),
  controlButtonHeight: verticalScale(48),
  controlButtonWidth: horizontalScale(48),
  inputHeight: verticalScale(48),
  headerHeight: verticalScale(56),

  buttonWidth: '60%',
  inputWidth: '100%',

  modalWidth: horizontalScale(300),

  iconSmall: moderateScale(16),
  iconMedium: moderateScale(24),
  iconLarge: moderateScale(32),

  iconPadding: moderateScale(8),

  avatarSmall: moderateScale(24),
  avatarMedium: moderateScale(62),
  avatarLarge: moderateScale(72),

  cardWidth: '100%',
  cardHeight: verticalScale(130),
};
