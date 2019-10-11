import axios from 'axios'
import store from '../store/index'
import router from '../router'

axios.interceptors.request.use((config) => {

   
    return config;
}, (error) => {


    return Promise.reject(error);
});

// Add a response interceptor  响应拦截
axios.interceptors.response.use((response) => {

    return response;
}, (error) => {
   
    
    return Promise.reject(error);
});

export default axios;