import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {useAuthContext, useThemeContext} from '../../../hooks';
import {handleNameDisplay} from '../Home.helpers';
import {userProfileStyles} from './UserProfile.styles';

export const UserProfile = () => {
  const {user} = useAuthContext();
  const {themeColors, isDark} = useThemeContext();
  const [displayName, setDisplayName] = useState(user?.user?.name);
  const [textMaxWidth, setTextMaxWidth] = useState(0);

  useEffect(() => {
    handleNameDisplay(user?.user?.name, textMaxWidth, setDisplayName);
  }, [textMaxWidth]);

  const styles = userProfileStyles(themeColors);

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity activeOpacity={0.7}>
        <CustomIcon
          name="account-circle"
          size={DIMENSIONS.avatarMedium}
          color={isDark ? themeColors.text200 : themeColors.bg200}
        />
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Text
          onLayout={e => setTextMaxWidth(e.nativeEvent.layout.width)}
          style={[
            styles.username,
            {color: isDark ? themeColors.text100 : themeColors.bg100},
          ]}
          numberOfLines={1}>
          {displayName}
        </Text>
        <Text
          style={[
            styles.email,
            {color: isDark ? themeColors.text200 : themeColors.bg200},
          ]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {user?.user?.email}
        </Text>
      </View>
    </View>
  );
};

export default UserProfile;
