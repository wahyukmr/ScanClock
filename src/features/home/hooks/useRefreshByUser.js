import {useState} from 'react';

export const useRefreshByUser = onRefresh => {
  const [isRefetching, setIsRefetching] = useState(false);

  const refetchByUser = async () => {
    setIsRefetching(true);

    try {
      await onRefresh();
    } finally {
      setIsRefetching(false);
    }
  };

  return {isRefetching, refetchByUser};
};
