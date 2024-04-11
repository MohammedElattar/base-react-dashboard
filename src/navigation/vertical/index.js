import { Mail, Home } from "react-feather"

export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "categories",
    title: "Categories",
    icon: <Mail size={20} />,
    navLink: "/second-page"
  }
]
