import NotificationView from "../views/NotificationView";
import useNotificationLogic from "../hooks/useNotificationLogic";
import {useEffect} from "react";
import {formatUnreadNotificationsCount} from "../helpers/notificationHelper";
import {useStore} from "react-redux";

const NotificationContainer = () => {
    const {
        // getAllNotifications,
        unreadNotifications,
        unreadNotificationsCount
        // unreadNotificationsLoading
    } = useNotificationLogic()

    useEffect(() => {
        unreadNotificationsCount()
    }, []);

    console.log(useStore().getState())
    return <NotificationView
        unreadNotificationsCount={formatUnreadNotificationsCount(unreadNotifications)}
    />
}

export default NotificationContainer;