import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../../api/axiosInstance";
import {HttpResponse} from "../../../constants/api";
import {resetLogin, setToken, setUserData} from "../utils/authHelper";
import {LOGIN_ROUTE} from "../constants/routes";
import {useNavigate} from "react-router-dom";
import {
    resetLoginReducer,
    setUserInfoCodeReducer,
    setUserInfoLoadingReducer,
    setUserInfoReducer
} from "../redux/loginReducer";

export const useAuthLogic = () => {
    const dispatch = useDispatch()
    const loginSelector = useSelector(state => state.loginReducer)
    const navigate = useNavigate()

    const userInfoHandler = (result, shouldSetToken = true) => {
        if (result.data.code === HttpResponse.OK) {
            //TODO localStorage stuff
            setUserData(result.data.data)

            if (shouldSetToken) {
                setToken(result.data.data.token)
            }

            //TODO redux stuff
            dispatch(setUserInfoReducer(result.data.data))
        }

        dispatch(setUserInfoCodeReducer(result.data.code))
    }

    const dispatchLogin = (payload) => {
        dispatch(setUserInfoLoadingReducer(true))

        return axiosInstance
            .post("/auth/login/dashboard", {...payload, fcm_token: '123123'})
            .then((result) => userInfoHandler(result))
            .finally(() => {
                dispatch(setUserInfoLoadingReducer(false))
            });
    }

    const fetchProfile = () => {
        return axiosInstance
            .get('/auth/profile')
            .then(res => userInfoHandler(res, false))
    }

    const dispatchLogout = () => {
        axiosInstance
            .post('/auth/logout')
            .then(() => {
                resetLogin()
                dispatch(resetLoginReducer())
                navigate(LOGIN_ROUTE)
            })
    }
    return {
        loginSelector,
        dispatchLogin,
        fetchProfileLogic: fetchProfile,
        dispatchLogout
    }
}