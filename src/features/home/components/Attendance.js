import React from 'react';
import {Text, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {currentMonthByIndex, orderOfMonths} from '../Home.helpers';
import {useFetchAttendance} from '../hooks/useFetchAttendance';
import {attendanceStyles} from './Attendance.styles';

export const Attendance = ({themeColors}) => {
  const {data: presences} = useFetchAttendance();

  const currentMonthData = presences
    ? presences[orderOfMonths[currentMonthByIndex]]
    : null;
  const dayData = currentMonthData
    ? currentMonthData[new Date().getDate() - 1]
    : {};
  const checkInTime = dayData?.in?.trim() || '';
  const checkOutTime = dayData?.out?.trim() || '';

  const styles = attendanceStyles(themeColors);

  return (
    <View style={styles.attendance}>
      <Text style={styles.attendanceText}>Status absensi hari ini:</Text>
      <View style={styles.attendanceWrapper}>
        <View style={styles.attendanceItem}>
          <View
            style={[
              styles.iconWrapper,
              {
                backgroundColor: checkInTime
                  ? themeColors.primary200
                  : themeColors.accent200,
              },
            ]}>
            <CustomIcon
              name="check"
              size={DIMENSIONS.iconLarge}
              color={checkInTime ? themeColors.primary300 : themeColors.bg300}
            />
          </View>
          <View>
            <Text
              style={[
                styles.label,
                {
                  color: checkInTime
                    ? themeColors.text200
                    : themeColors.accent200,
                },
              ]}>
              Hadir
            </Text>
            <Text
              style={[
                styles.timeText,
                {
                  color: checkInTime
                    ? themeColors.text100
                    : themeColors.accent200,
                },
              ]}>
              {checkInTime || '--:--'}
            </Text>
          </View>
        </View>

        <View style={styles.attendanceItem}>
          <View
            style={[
              styles.iconWrapper,
              {
                backgroundColor: checkOutTime
                  ? themeColors.primary200
                  : themeColors.accent200,
              },
            ]}>
            <CustomIcon
              name="check"
              size={DIMENSIONS.iconLarge}
              color={checkOutTime ? themeColors.primary300 : themeColors.bg300}
            />
          </View>
          <View>
            <Text
              style={[
                styles.label,
                {
                  color: checkOutTime
                    ? themeColors.text200
                    : themeColors.accent200,
                },
              ]}>
              Pulang
            </Text>
            <Text
              style={[
                styles.timeText,
                {
                  color: checkOutTime
                    ? themeColors.text100
                    : themeColors.accent200,
                },
              ]}>
              {checkOutTime || '--:--'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Attendance;
