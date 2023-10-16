import axios, { AxiosInstance } from 'axios';
import { serializer } from '../../utils/serializer';

export const axiosClient = (baseUrl: string): AxiosInstance =>
  axios.create({
    baseURL: baseUrl,
    timeout: 7200000,
    paramsSerializer: serializer,
  });
