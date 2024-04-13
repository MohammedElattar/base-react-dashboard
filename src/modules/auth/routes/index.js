import {lazy} from "react"
import {LOGIN_ROUTE} from "../constants/routes";

const LoginController = lazy(() => import("../containers/LoginContainer"))

export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <LoginController/>,
        meta: {
            layout: "blank"
        }
    }
]