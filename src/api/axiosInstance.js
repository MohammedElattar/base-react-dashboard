import axios from "axios"
import TokenComponent from "../modules/auth/utils/TokenComponent";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${<TokenComponent />}`
    }
})

axiosInstance.interceptors.response.use(function (response) {

    return response;
}, function (error) {

    return Promise.reject(error);
})

export default axiosInstance