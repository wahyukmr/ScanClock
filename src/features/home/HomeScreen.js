import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LAYOUT} from '../../constants';
import {useThemeContext} from '../../hooks';
import {apiData} from './Home.dummyData';
import {availableMonths, currentMonthIndex, renderDay} from './Home.helpers';
import {homeStyles} from './Home.styles';
import {MonthNavigation} from './components';

const HomeScreen = ({route}) => {
  const [displayMonth, setDisplayMonth] = useState(currentMonthIndex);
  const {styles, themeColors} = useThemeContext(homeStyles);
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      if (route.params?.selectedMonth !== undefined) {
        setDisplayMonth(route.params.selectedMonth);
      }
    }, [route.params?.selectedMonth]),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={apiData[availableMonths[displayMonth]]}
        renderItem={({item, index}) => renderDay(item, index, styles)}
        keyExtractor={(_, index) => index.toString()}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <MonthNavigation
            selectedMonth={displayMonth}
            setSelectedMonth={setDisplayMonth}
            themeColors={themeColors}
          />
        }
        contentContainerStyle={{
          paddingHorizontal: LAYOUT.paddingMedium,
          paddingBottom: insets.bottom + LAYOUT.paddingXLarge,
          paddingTop: LAYOUT.paddingXLarge + LAYOUT.paddingXLarge,
        }}
      />
    </View>
  );
};

export default HomeScreen;
