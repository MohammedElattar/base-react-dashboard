import { Mail, Home, MessageSquare} from "react-feather"

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
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  }
]
