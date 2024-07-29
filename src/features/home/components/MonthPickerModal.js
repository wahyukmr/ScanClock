import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS, ROUTE} from '../../../constants';
import {useThemeContext} from '../../../hooks';
import {goBack, navigate} from '../../../navigation/NavigationServices';
import {monthPickerModalStyles} from './MonthPickerModal.styles';

const MonthPickerModal = ({presences}) => {
  const {styles, themeColors} = useThemeContext(monthPickerModalStyles);

  const handleSelectMonth = month => {
    navigate(ROUTE.homeScreen, {selectedMonth: month});
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <CustomIcon
          name="calendar-month-outline"
          size={DIMENSIONS.iconMedium}
          color={themeColors.text200}
        />
        <Text style={styles.headerText}>Pilih Bulan</Text>
        <TouchableHighlight
          underlayColor={themeColors.bg300}
          style={styles.btnCloseIcon}
          onPress={goBack}>
          <CustomIcon
            name="close"
            size={DIMENSIONS.iconMedium}
            color={themeColors.text200}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.content}>
        {Object.keys(presences).map((month, index) => (
          <TouchableOpacity
            activeOpacity={0.3}
            key={index}
            style={styles.monthButton}
            onPress={() => handleSelectMonth(index)}>
            <Text style={styles.monthText}>{month}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MonthPickerModal;
