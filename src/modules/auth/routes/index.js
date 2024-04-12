import {lazy} from "react"
import authRoutesNames from "../constants/routesNames"

const LoginController = lazy(() => import("../containers/LoginContainer"))

export const authRoutes = [
    {
        path: authRoutesNames.LOGIN,
        element: <LoginController/>,
        meta: {
            layout: "blank"
        }
    }
]