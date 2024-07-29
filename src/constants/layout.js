import {horizontalScale, moderateScale, verticalScale} from '../utils/scales';

export const LAYOUT = {
  screenPadding: moderateScale(24),

  elementSpacingVerticalXSmall: verticalScale(4),
  elementSpacingVerticalSmall: verticalScale(10),
  elementSpacingVerticalMedium: verticalScale(16),
  elementSpacingVerticalLarge: verticalScale(24),

  elementSpacingHorizontalXSmall: horizontalScale(4),
  elementSpacingHorizontalSmall: horizontalScale(10),
  elementSpacingHorizontalMedium: horizontalScale(16),
  elementSpacingHorizontalLarge: horizontalScale(24),

  paddingVerticalXSmall: verticalScale(4),
  paddingVerticalSmall: verticalScale(8),
  paddingVerticalMedium: verticalScale(16),
  paddingVerticalLarge: verticalScale(24),
  paddingVerticalXLarge: verticalScale(32),
  paddingVertical2x1: verticalScale(48),
  paddingVertical3x1: verticalScale(64),

  paddingHorizontalXSmall: horizontalScale(4),
  paddingHorizontalSmall: horizontalScale(8),
  paddingHorizontalMedium: horizontalScale(16),
  paddingHorizontalLarge: horizontalScale(24),
  paddingHorizontalXLarge: horizontalScale(32),
  paddingHorizontal2x1: horizontalScale(48),
  paddingHorizontal3x1: horizontalScale(64),

  marginVerticalXSmall: verticalScale(4),
  marginVerticalSmall: verticalScale(8),
  marginVerticalMedium: verticalScale(16),
  marginVerticalLarge: verticalScale(24),
  marginVerticalXLarge: verticalScale(32),
  marginVertical2x1: verticalScale(48),

  marginHorizontalXSmall: horizontalScale(4),
  marginHorizontalSmall: horizontalScale(8),
  marginHorizontalMedium: horizontalScale(16),
  marginHorizontalLarge: horizontalScale(24),
  marginHorizontalXLarge: horizontalScale(32),
  marginHorizontal2x1: horizontalScale(48),

  gapVerticalSmall: verticalScale(4),
  gapVerticalMedium: verticalScale(10),
  gapVerticalLarge: verticalScale(20),

  gapHorizontalSmall: horizontalScale(4),
  gapHorizontalMedium: horizontalScale(10),
  gapHorizontalLarge: horizontalScale(20),
};
