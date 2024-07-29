import {axiosInstance} from '../../../services/axiosInstance';

export const attendanceCheckerService = {
  doAttendance: async (attendance, status) => {
    const requestData = {
      status,
      latitude: 123456,
      longitude: 1234556,
      desc: '',
    };

    isRequestDataRequired = status === 'Hadir' ? requestData : {};

    try {
      const {data} = await axiosInstance.post(
        attendance,
        isRequestDataRequired,
        {
          requiresAuth: true,
        },
      );
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
