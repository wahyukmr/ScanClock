import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS, ROUTE} from '../../../constants';
import {useModalContext} from '../../../hooks';
import {navigate} from '../../../navigation/NavigationServices';
import {availableMonths, currentMonthIndex, currentYear} from '../Home.helpers';
import {monthNavigationStyles} from './MonthNavigation.styles';
import MonthPickerModal from './MonthPickerModal';

const MonthNavigation = ({selectedMonth, setSelectedMonth, themeColors}) => {
  const styles = monthNavigationStyles(themeColors);
  const {openModal} = useModalContext();

  return (
    <View style={styles.monthNavigationContainer}>
      <TouchableHighlight
        underlayColor={themeColors.bg200}
        style={styles.monthIcon}
        onPress={() => {
          openModal(MonthPickerModal);
          navigate(ROUTE.dynamicModal);
        }}>
        <CustomIcon
          name="calendar-month-outline"
          size={DIMENSIONS.iconLarge}
          color={themeColors.accent100}
        />
      </TouchableHighlight>
      <View style={styles.monthNavigation}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.arrowButton,
            selectedMonth === 0 && {backgroundColor: themeColors.bg200},
          ]}
          onPress={() => setSelectedMonth(prev => Math.max(prev - 1, 0))}
          disabled={selectedMonth === 0}>
          <CustomIcon
            name="chevron-left"
            size={DIMENSIONS.iconLarge}
            color={selectedMonth === 0 ? themeColors.bg300 : themeColors.bg200}
          />
        </TouchableOpacity>
        <View style={styles.monthWrapper}>
          <Text style={styles.month}>{availableMonths[selectedMonth]}</Text>
          <Text style={styles.year}>{currentYear}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.arrowButton,
            selectedMonth === currentMonthIndex && {
              backgroundColor: themeColors.bg200,
            },
          ]}
          onPress={() =>
            setSelectedMonth(prev => Math.min(prev + 1, currentMonthIndex))
          }
          disabled={selectedMonth === currentMonthIndex}>
          <CustomIcon
            name="chevron-right"
            size={DIMENSIONS.iconLarge}
            color={
              selectedMonth === currentMonthIndex
                ? themeColors.bg300
                : themeColors.bg200
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MonthNavigation;
