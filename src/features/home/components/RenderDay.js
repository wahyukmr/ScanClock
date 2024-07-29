import React from 'react';
import {Text, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';

const RenderDay = ({item, index, styles}) => {
  const isPresent = item.statusPresence === 'Hadir';

  return (
    <View
      style={[styles.dayContainer, isPresent ? styles.present : styles.alpha]}>
      <Text style={styles.dayText}>
        <CustomIcon
          name="calendar-today"
          size={DIMENSIONS.iconSmall}
          color={styles.dayText.color}
        />{' '}
        {index + 1}
      </Text>
      <Text
        style={[
          styles.statusText,
          isPresent ? styles.statusTextPresent : styles.statusTextAlpha,
        ]}>
        {item.statusPresence}
      </Text>
    </View>
  );
};

export default RenderDay;
