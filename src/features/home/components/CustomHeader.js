import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LAYOUT} from '../../../constants';
import {useThemeContext} from '../../../hooks';
import Attendance from './Attendance';
import {customHeaderStyles} from './CustomHeader.styles';
import TopHeader from './TopHeader';
import UserProfile from './UserProfile';

const CustomHeader = () => {
  const {styles, themeColors} = useThemeContext(customHeaderStyles);
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={[
          styles.header,
          {paddingTop: insets.top + LAYOUT.paddingVerticalSmall},
        ]}>
        <TopHeader themeColors={themeColors} />
        <UserProfile />
      </View>
      <View style={{paddingHorizontal: LAYOUT.paddingHorizontalLarge}}>
        <Attendance themeColors={themeColors} />
      </View>
    </>
  );
};

export default CustomHeader;
