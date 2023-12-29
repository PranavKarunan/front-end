import axios from 'axios';
// const url = process.env.REACT_APP_API_BASE_URL;
const url = 'localhost:7000/'

const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',

    }
});

axiosInstance.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.data?.error) {
            return Promise.reject((error.response.data.error) || 'Something went wrong!');

        }
        else if (error.response?.data?.message) {

            if (!error.request.responseURL.toString().includes('tms'))
                return Promise.reject((error.response.data.message) || 'Something went wrong!');

        }
        else {
            return Promise.reject((error.response && error.response.data && error.response.data.message) || 'Something went wrong!');


        }


    }
);




export default axiosInstance;
