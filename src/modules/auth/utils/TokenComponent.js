import authStorageKeys from "../constants/authStorageKeys";
import {useSelector} from "react-redux";

const TokenComponent = () => {
    const loginReducer = useSelector(state => state.loginReducer);

    const getToken = () => {
        return localStorage.getItem(authStorageKeys.TOKEN)
            || loginReducer.token
            || '';
    };

    return getToken()
}

export const setToken = (token) => {
    localStorage.setItem(authStorageKeys.TOKEN, token);
};

export default TokenComponent