import axios from "axios"
import {getToken, resetLogin} from "../modules/auth/utils/authHelper";
import {HttpResponse} from "../constants/api";
import toast from "react-hot-toast";
import {LOGIN_ROUTE} from "../modules/auth/constants/routes";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})

axiosInstance.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    toast.dismiss()

    const shouldShowToast = response.data.showToast;

    if (shouldShowToast) {
        toast.success(response.data.message)
    }

    return response;
}, function (error) {
    const data = error.response.data,
        errorCode = data.code,
        message = data.message;

    toast.dismiss()

    if (errorCode === HttpResponse.UN_AUTHENTICATED) {
        toast.error(message)
        resetLogin()

        if (window.location.pathname !== LOGIN_ROUTE) {
            window.location.replace(LOGIN_ROUTE)
        }
    } else {
        toast.error(message)
    }

    return Promise.reject(error);
})

export default axiosInstance