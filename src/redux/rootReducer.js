// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import loginReducer from "../modules/auth/redux/loginReducer";
import notificationReducer from '../modules/notification/redux/notifications'

const rootReducer = {
    navbar,
    layout,
    loginReducer,
    notificationReducer
}

export default rootReducer
