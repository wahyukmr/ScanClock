import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {dummyUser} from '../Home.dummyData';
import {handleNameDisplay} from '../Home.helpers';
import {userProfileStyles} from './UserProfile.styles';

export const UserProfile = ({themeColors}) => {
  const [displayName, setDisplayName] = useState(dummyUser.username);
  const [textMaxWidth, setTextMaxWidth] = useState(0);

  useEffect(() => {
    handleNameDisplay(dummyUser.username, textMaxWidth, setDisplayName);
  }, [textMaxWidth]);

  const styles = userProfileStyles(themeColors);

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity activeOpacity={0.7}>
        <CustomIcon
          name="account-circle"
          size={DIMENSIONS.avatarLarge}
          color={themeColors.text200}
        />
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Text
          onLayout={e => setTextMaxWidth(e.nativeEvent.layout.width)}
          style={styles.username}
          numberOfLines={1}>
          {displayName}
        </Text>
        <Text style={styles.email} numberOfLines={1} ellipsizeMode="tail">
          {dummyUser.email}
        </Text>
      </View>
    </View>
  );
};

export default UserProfile;
