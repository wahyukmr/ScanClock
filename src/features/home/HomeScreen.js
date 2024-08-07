import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomLoading} from '../../components';
import {LAYOUT} from '../../constants';
import {useNetworkContext, useThemeContext} from '../../hooks';
import {currentMonthByIndex, orderOfMonths, renderDay} from './Home.helpers';
import {homeStyles} from './Home.styles';
import {CustomHeader, MonthNavigation} from './components';
import {useFetchAttendance} from './hooks/useFetchAttendance';
import {useRefreshByUser} from './hooks/useRefreshByUser';

const HomeScreen = ({route}) => {
  const {data: presences, isLoading, error, refetch} = useFetchAttendance();
  const {isRefetching, refetchByUser} = useRefreshByUser(refetch);
  const [selectedMonth, setSelectedMonth] = useState(currentMonthByIndex);
  const {styles, themeColors} = useThemeContext(homeStyles);
  const {isConnected} = useNetworkContext();
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      if (route.params?.selectedMonth !== undefined) {
        setSelectedMonth(route.params.selectedMonth);
      }
    }, [route.params?.selectedMonth]),
  );

  const dataPresences = presences && presences[orderOfMonths[selectedMonth]];

  return (
    <View style={styles.container}>
      <CustomHeader />
      <FlatList
        data={dataPresences}
        renderItem={({item, index}) => renderDay(item, index, styles)}
        keyExtractor={(_, index) => index.toString()}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetchByUser} />
        }
        ListHeaderComponent={
          <MonthNavigation
            presences={presences}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            themeColors={themeColors}
          />
        }
        ListEmptyComponent={
          isLoading ? (
            <View style={styles.loadingWrapper}>
              <CustomLoading message="Memuat data..." />
            </View>
          ) : (
            <Text style={styles.errorMessage}>
              {!isConnected
                ? 'Gagal mendapatkan data presensi, tolong periksa koneksi internet anda.'
                : error?.message || 'Failed to fetch presences.'}
            </Text>
          )
        }
        contentContainerStyle={[
          styles.contentContainerStyle,
          {paddingBottom: insets.bottom + LAYOUT.paddingVerticalXLarge},
        ]}
      />
    </View>
  );
};

export default HomeScreen;
