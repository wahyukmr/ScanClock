import {API_ENDPOINTS} from '../../../constants';
import {axiosInstance} from '../../../services/axiosInstance';

export const attendanceService = {
  getAttendance: async () => {
    try {
      const {data} = await axiosInstance.get(API_ENDPOINTS.PRESENCE, {
        requiresAuth: true,
      });
      return data;
    } catch (error) {
      throw new Error('Failed to fetch presences');
    }
  },
};
