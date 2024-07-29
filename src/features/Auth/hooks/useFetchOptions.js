import {useQuery} from '@tanstack/react-query';
import {useNetworkContext} from '../../../hooks';
import {authService} from '../services/authService';

export const useFetchOptions = (fieldType, params, isRegister) => {
  const {isConnected} = useNetworkContext();

  const fetcher = () => {
    switch (fieldType) {
      case 'divisions':
        return authService.fetchDivisions();
      case 'departments':
        return authService.fetchDepartments(params.divisionId);
      case 'branches':
        return authService.fetchBranches();
      default:
        throw new Error('Invalid type');
    }
  };

  return useQuery({
    queryKey: [fieldType, params],
    queryFn: fetcher,
    enabled: isConnected && isRegister,
  });
};
