import {API_ENDPOINTS} from '../../../constants';
import {axiosInstance} from '../../../services/axiosInstance';
import {generateRandomDeviceModel} from '../Auth.helpers';

export const authService = {
  loginRequest: async values => {
    try {
      const requestData = {email: values.email, password: values.password};

      const {data: userData} = await axiosInstance.post(
        API_ENDPOINTS.LOGIN,
        requestData,
      );
      return userData;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  registerRequest: async values => {
    const deviceModel = generateRandomDeviceModel();

    const requestData = {
      name: values?.name,
      gender: values?.gender,
      email: values?.email,
      phone_number: values?.phone,
      password: values?.password,
      division: values?.division,
      department: values?.department,
      branch: values?.branch.toString(),
      position: values?.position,
      device_model: deviceModel,
    };

    try {
      const {data} = await axiosInstance.post(
        API_ENDPOINTS.REGISTER,
        requestData,
      );
      return data;
    } catch (error) {
      if (error.response.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        throw new Error(errorMessages);
      } else {
        throw new Error(error.response.data?.message || error.message);
      }
    }
  },

  fetchDivisions: async () => {
    try {
      const {data} = await axiosInstance.get(API_ENDPOINTS.DIVISIONS);
      return data;
    } catch (error) {
      throw new Error('Failed to fetch divisions');
    }
  },

  fetchDepartments: async divisionId => {
    try {
      const {data} = await axiosInstance.get(
        `${API_ENDPOINTS.DEPARTMENTS}${divisionId}`,
      );
      return data;
    } catch (error) {
      throw new Error('Failed to fetch departments');
    }
  },

  fetchBranches: async () => {
    try {
      const {data} = await axiosInstance.get(API_ENDPOINTS.BRANCHES);
      return data;
    } catch (error) {
      throw new Error('Failed to fetch branches');
    }
  },
};
