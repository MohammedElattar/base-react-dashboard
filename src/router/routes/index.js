// ** React Imports
import {Fragment, lazy} from "react"
import {Navigate} from "react-router-dom"
// ** Layouts
import BlankLayout from "@layouts/BlankLayout"
import VerticalLayout from "@src/layouts/VerticalLayout"
import HorizontalLayout from "@src/layouts/HorizontalLayout"
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper"

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute"

// ** Utils
import {isObjEmpty} from "@utils"
import {authRoutes} from "../../modules/auth/routes"

const getLayout = {
    blank: <BlankLayout/>,
    vertical: <VerticalLayout/>,
    horizontal: <HorizontalLayout/>
}

// ** Document title
const TemplateTitle = "%s - Mohamed Attar"

// ** Default Route
const DefaultRoute = "/home"

const Home = lazy(() => import("../../views/Home"))
const SecondPage = lazy(() => import("../../views/SecondPage"))
const Error = lazy(() => import("../../views/Error"))

// ** Merge Routes
const Routes = [
    {
        path: "/",
        index: true,
        element: <Navigate replace to={DefaultRoute}/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/second-page",
        element: <SecondPage/>
    },
    {
        path: "/error",
        element: <Error/>,
        meta: {
            layout: "blank"
        }
    },
  ...authRoutes
]

const getRouteMeta = (route) => {
    if (isObjEmpty(route.element.props)) {
        if (route.meta) {
            return {routeMeta: route.meta}
        } else {
            return {}
        }
    }
}

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
    const LayoutRoutes = []

    if (Routes) {
        Routes.filter((route) => {
            let isBlank = false
            // ** Checks if Route layout or Default layout matches current layout
            if (
                (route.meta && route.meta.layout && route.meta.layout === layout) ||
                ((route.meta === undefined || route.meta.layout === undefined) &&
                    defaultLayout === layout)
            ) {
                const RouteTag = PublicRoute

                // ** Check for public or private route
                if (route.meta) {
                    route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false)
                }
                if (route.element) {
                    const Wrapper =
                        // eslint-disable-next-line multiline-ternary
                        isObjEmpty(route.element.props) && isBlank === false
                            ? // eslint-disable-next-line multiline-ternary
                            LayoutWrapper
                            : Fragment

                    route.element = (
                        <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                            <RouteTag route={route}>{route.element}</RouteTag>
                        </Wrapper>
                    )
                }

                // Push route to LayoutRoutes
                LayoutRoutes.push(route)
            }
            return LayoutRoutes
        })
    }

    return LayoutRoutes
}

const getRoutes = (layout) => {
    const defaultLayout = layout || "vertical"
    const layouts = ["vertical", "horizontal", "blank"]

    const allRoutes = []

    layouts.forEach((layoutItem) => {
        const layoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout)

        allRoutes.push({
            path: "/",
            element: getLayout[layoutItem] || getLayout[defaultLayout],
            children: layoutRoutes
        })
    })
    return allRoutes
}

export {DefaultRoute, TemplateTitle, Routes, getRoutes}
