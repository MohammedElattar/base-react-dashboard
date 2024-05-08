import { Mail } from "react-feather";
import categoriesRoutes from '../constants/routes'

const sideBar = [
  {
    id: "categories",
    title: "Categories",
    icon: <Mail size={20} />,
    navLink: categoriesRoutes.TABLE
  }
];

export default sideBar;