// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import loginReducer from "../modules/auth/redux/loginReducer";

const rootReducer = {
    navbar,
    layout,
    loginReducer
}

export default rootReducer
