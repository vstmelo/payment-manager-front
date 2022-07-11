import axios, { AxiosInstance } from 'axios';

   export const api: AxiosInstance = axios.create({
      baseURL:
         process.env.REACT_APP_AMBIENTE === 'dev'
            ? process.env.REACT_APP_BASE_URL_DEV
            : process.env.REACT_APP_BASE_URL_PROD,
   });
