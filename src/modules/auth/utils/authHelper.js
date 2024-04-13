import authStorageKeys from "../constants/authStorageKeys";
import {store} from '../../../redux/store'

export const getToken = () => {
    const loginReducer = store.getState().loginReducer

    return localStorage.getItem(authStorageKeys.TOKEN)
        || loginReducer.token
        || '';
};

export const setToken = (token) => {
    localStorage.setItem(authStorageKeys.TOKEN, token);
};

export const setUserData = (userInfo) => {
    localStorage.setItem(authStorageKeys.USER_DATA, JSON.stringify(userInfo));
};

export const getUserData = () => {
    const loginReducer = store.getState().loginReducer

    return JSON.parse(localStorage.getItem(authStorageKeys.USER_DATA))
        ||
        loginReducer.userInfo
        || {};
};

export const isUserLoggedIn = () => {
    return !!getToken()
}

export const resetToken = () => {
    localStorage.removeItem(authStorageKeys.TOKEN)
}

export const resetUserInfo = () => {
    localStorage.removeItem(authStorageKeys.USER_DATA)
}

export const resetLogin = () => {
    resetToken()
    resetUserInfo()
}