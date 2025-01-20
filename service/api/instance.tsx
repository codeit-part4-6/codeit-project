import axios from 'axios';

const INSTANCE_URL = axios.create({
  baseURL: `https://sp-globalnomad-api.vercel.app/11-6`,
});

INSTANCE_URL.interceptors.request.use(
  (config) => {
    // Access Token 제외 요청 처리
    if (config.headers?.['exclude-access-token']) {
      delete config.headers['exclude-access-token'];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default INSTANCE_URL;