import {useDispatch, useSelector} from "react-redux";
import {setUserInfoLoading, setUserInfo, setUserInfoCode} from "../redux/loginReducer";
import axiosInstance from "../../../api/axiosInstance";
import {HttpResponse} from "../../../constants/api";
import {setToken, setUserData} from "../utils/authHelper";

export const useAuthLogic = () => {
    const dispatch = useDispatch()
    const loginSelector = useSelector(state => state.loginReducer)

    const userInfoHandler = (result, shouldSetToken = true) => {
        if (result.data.code === HttpResponse.OK) {
            //TODO localStorage stuff
            setUserData(result.data.data)

            if (shouldSetToken) {
                setToken(result.data.data.token)
            }

            //TODO redux stuff
            dispatch(setUserInfo(result.data.data))
        }

        dispatch(setUserInfoCode(result.data.code))
    }

    const dispatchLogin = (payload) => {
        dispatch(setUserInfoLoading(true))

        return axiosInstance
            .post("/auth/login/dashboard", {...payload, fcm_token: '123123'})
            .then((result) => userInfoHandler(result))
            .finally(() => {
                dispatch(setUserInfoLoading(false))
            });
    }

    const fetchProfile = () => {
        return axiosInstance
            .get('/auth/profile')
            .then(res => userInfoHandler(res, false))
    }

    return {loginSelector, dispatchLogin, fetchProfileLogic: fetchProfile}
}