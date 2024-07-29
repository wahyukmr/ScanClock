import {useQuery} from '@tanstack/react-query';
import {useNetworkContext} from '../../../hooks';
import {attendanceService} from '../services/attendanceService';

export const useFetchAttendance = () => {
  const {isConnected} = useNetworkContext();

  return useQuery({
    queryKey: ['attendance'],
    queryFn: attendanceService.getAttendance,
    enabled: isConnected,
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  });
};
