import {useQuery} from '@tanstack/react-query';
import {useNetworkContext} from '../../../hooks';
import {userService} from '../services/userService';

export const useFetchUserData = token => {
  const {isConnected} = useNetworkContext();

  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ['user-data'],
    queryFn: userService.fetchUserData,
    enabled: !!token && isConnected,
  });

  if (error) {
    throw new Error('Failed to fetch user data');
  }

  return {data, isLoading, refetch};
};
