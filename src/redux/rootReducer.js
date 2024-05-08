// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import loginReducer from "../modules/auth/redux/loginReducer";
import notificationReducer from '../modules/notification/redux/notifications'
import chat from '../modules/chat/views/store'
import categoryReducer from '../modules/category/redux'

const rootReducer = {
    navbar,
    layout,
    loginReducer,
    notificationReducer,
    chat,
    categoryReducer
}

export default rootReducer
