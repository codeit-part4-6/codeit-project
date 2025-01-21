import axios, { InternalAxiosRequestConfig } from 'axios';

const INSTANCE_URL = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/11-6',
});

INSTANCE_URL.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.headers['exclude-access-token']) {
      delete config.headers['exclude-access-token'];
      return config;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default INSTANCE_URL;