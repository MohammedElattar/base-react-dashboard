import axios from "axios"
import {getToken, resetLogin} from "../modules/auth/utils/authHelper";
import {HttpResponse} from "../constants/api";
import {LOGIN_ROUTE} from "../modules/auth/constants/routes";
import toastFactory from "../utility/factories/toastFactory";

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
    toastFactory.dismiss()

    const shouldShowToast = response.data.showToast;

    if (shouldShowToast) {
        toastFactory.success(response.data.message)
    }

    return response;
}, function (error) {
    const data = error.response.data,
        errorCode = data.code,
        message = data.message;

    toastFactory.dismiss()

    if (errorCode === HttpResponse.UN_AUTHENTICATED) {
        toastFactory.error(message)
        resetLogin()

        if (window.location.pathname !== LOGIN_ROUTE) {
            window.location.replace(LOGIN_ROUTE)
        }

    } else if (errorCode !== HttpResponse.VALIDATION_ERRORS) {
        toastFactory.error(message)
    }

    return Promise.reject(error);
})

export default axiosInstance