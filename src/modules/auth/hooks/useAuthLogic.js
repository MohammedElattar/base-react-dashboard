import {useDispatch, useSelector} from "react-redux";
import {setUserInfoLoading, setUserInfo, setUserInfoCode} from "../redux/loginReducer";
import axiosInstance from "../../../api/axiosInstance";
import {HttpResponse} from "../../../constants/api";
import {setUserData} from "../utils/UserDataComponent";
import {setToken} from "../utils/TokenComponent";

export const useAuthLogic = () => {
    const dispatch = useDispatch()
    const loginSelector = useSelector(state => state.loginReducer)

    const dispatchLogin = (payload) => {
        dispatch(setUserInfoLoading(true))

        return axiosInstance
            .post("/auth/login/dashboard", {...payload, fcm_token: '123123'})
            .then((result) => {
                if (result.data.code === HttpResponse.OK) {
                    //TODO local storage things
                    setUserData(result.data.data)
                    setToken(result.data.data.token)

                    //TODO redux stuff
                    dispatch(setUserInfo(result.data.data))
                }

                dispatch(setUserInfoCode(result.data.code))
            }).finally(() => {
                dispatch(setUserInfoLoading(false))
            });
    }

    return {loginSelector, dispatchLogin}
}