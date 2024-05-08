import { lazy } from "react";
import routes from "../constants/routes";

const CategoryContainer = lazy(() => import('../containers/CategoryContainer'));

const categoryRoutes = [
    {
        path: routes.TABLE,
        element: <CategoryContainer/>
    }
];

export default categoryRoutes;