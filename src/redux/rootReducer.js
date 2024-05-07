// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import loginReducer from "../modules/auth/redux/loginReducer";
import notificationReducer from '../modules/notification/redux/notifications'
import chat from '../modules/chat/views/store'
const rootReducer = {
    navbar,
    layout,
    loginReducer,
    notificationReducer,
    chat
}

export default rootReducer
