
import { BASE_URL, TIMEOUT } from './utils';
import axios, { AxiosInstance } from 'axios';

// 创建axios实例
let  service: AxiosInstance;

service = axios.create({
    baseURL: BASE_URL, // api的base_url
    timeout: TIMEOUT, // 请求超时时间
});


// console.log('process.env.BASE_URL',process.env.BASE_URL)
// request拦截器 axios的一些配置
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // Do something with request error
        console.error('error:', error); // for debug
        Promise.reject(error);
    },
);

// respone拦截器 axios的一些配置
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.error('error:' + error); // for debug
        return Promise.reject(error);
    },
);

export default service;





