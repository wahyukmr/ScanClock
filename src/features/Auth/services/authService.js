import {ToastAndroid} from 'react-native';
import axiosInstance from '../../../api/axiosInstance';
import {API_ENDPOINTS} from '../../../constants';
import {generateRandomDeviceModel} from '../Auth.helpers';

export const reqLogin = async values => {
  try {
    const requestData = {email: values.email, password: values.password};
    // const formData = new FormData();
    // formData.append('email', values.email);
    // formData.append('password', values.password);

    const {data} = await axiosInstance.post(API_ENDPOINTS.LOGIN, requestData);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const reqRegister = async values => {
  const deviceModel = generateRandomDeviceModel();

  try {
    const requestData = {
      name: values.name,
      gender: values.gender,
      email: values.email,
      phone_number: values.phone,
      password: values.password,
      division: values.division,
      department: values.department,
      branch: values.branch.toString(),
      position: values.position,
      device_model: '123456789002',
    };
    console.log('Register request data:', requestData);

    // const formData = new FormData();
    // formData.append('name', values.name);
    // formData.append('gender', values.gender);
    // formData.append('email', values.email);
    // formData.append('phone_number', values.phone);
    // formData.append('password', values.password);
    // formData.append('division', values.division);
    // formData.append('department', values.department);
    // formData.append('branch', values.branch.toString());
    // formData.append('position', values.position);
    // formData.append('device_model', '123456789003');

    const {data} = await axiosInstance.post(
      API_ENDPOINTS.REGISTER,
      requestData,
    );
    const statusResponse = data.message;
    ToastAndroid.showWithGravity(
      statusResponse,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  } catch (error) {
    console.log(error.response.data.errors);
    if (error.response.data?.errors) {
      const errorMessages = Object.values(error.response.data.errors);
      throw new Error(errorMessages);
    } else {
      throw new Error(error.response.data?.message || error.message);
    }
  }
};

export const fetchDivisions = async () => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.DEVISIONS);
  return data;
};

export const fetchDepartments = async divisionId => {
  const {data} = await axiosInstance.get(
    `${API_ENDPOINTS.DEPARTMENTS}${divisionId}`,
  );
  return data;
};

export const fetchBranches = async () => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.BRANCHES);
  return data;
};
