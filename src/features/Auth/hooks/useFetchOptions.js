import {useEffect, useReducer} from 'react';
import {fetchReducer, initialState} from '../reducers/fetchReducer';
import {
  fetchBranches,
  fetchDepartments,
  fetchDivisions,
} from '../services/authService';

export const useFetchOptions = (type, params = {}) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchOptions = async () => {
      dispatch({type: 'FETCH_INIT'});
      try {
        let data;
        switch (type) {
          case 'divisions':
            data = await fetchDivisions();
            break;
          case 'departments':
            const response = await fetchDepartments(params.divisionId);
            if (response.status === 'OK') {
              throw new Error(response.data);
            }
            data = response;
            break;
          case 'branches':
            data = await fetchBranches();
            break;
          default:
            throw new Error('Invalid type');
        }
        dispatch({type: 'FETCH_SUCCESS', payload: data});
      } catch (err) {
        dispatch({
          type: 'FETCH_FAILURE',
          payload: err.message || 'Failed to fetch data',
        });
      }
    };

    fetchOptions();
  }, [type, JSON.stringify(params)]);

  return {...state};
};
