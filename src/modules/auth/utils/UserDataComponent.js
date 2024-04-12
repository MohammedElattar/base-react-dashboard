import authStorageKeys from "../constants/authStorageKeys";
import {useSelector} from "react-redux";

const UserDataComponent = () => {
    const loginReducer = useSelector(state => state.loginReducer);

    const getUserData = () => {
        return localStorage.getItem(authStorageKeys.USER_DATA)
            || loginReducer.userInfo || {};
    };

    return getUserData()
}

export const setUserData = (userInfo) => {
    localStorage.setItem(authStorageKeys.USER_DATA, JSON.stringify(userInfo));
};

export default UserDataComponent;