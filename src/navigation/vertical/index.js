import { Home, MessageSquare} from "react-feather"
import categories from "../../modules/category/routes/sidebar"

export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  ...categories
]
