import {moderateScale, verticalScale} from '../utils/scales';

export const FONT_SIZE = {
  textXSmall: {fontSize: moderateScale(12), lineHeight: verticalScale(16)},
  textSmall: {fontSize: moderateScale(14), lineHeight: verticalScale(20)},
  textBase: {fontSize: moderateScale(16), lineHeight: verticalScale(24)},
  textLarge: {fontSize: moderateScale(18), lineHeight: verticalScale(28)},
  textXLarge: {fontSize: moderateScale(20), lineHeight: verticalScale(28)},
  text2xl: {fontSize: moderateScale(24), lineHeight: verticalScale(32)},
  text3xl: {fontSize: moderateScale(26), lineHeight: verticalScale(36)},
  text4xl: {fontSize: moderateScale(36), lineHeight: verticalScale(40)},
  text5xl: moderateScale(48),
  text6xl: moderateScale(60),
  text7xl: moderateScale(72),
  text8xl: moderateScale(96),
  text9xl: moderateScale(128),
};
