import useNotificationLogic from "../hooks/useNotificationLogic";
import {lazy, useEffect} from "react";
import {formatUnreadNotificationsCount} from "../helpers/notificationHelper";

const NotificationView = lazy(() => import('../views/NotificationView'))
const NotificationContainer = () => {
    const {
        getAllNotifications,
        unreadNotificationsCount,
        deleteOneNotification,
        deleteAllNotifications,
        readOneNotification,
        readAllNotifications,
        allNotification,
        unreadNotifications,
        readAllLoading
    } = useNotificationLogic()

    useEffect(() => {
        unreadNotificationsCount()
        getAllNotifications()
    }, []);

    return <NotificationView
        notifications={allNotification}
        handleDeletingOneNotification={deleteOneNotification}
        handleDeletingAllNotification={deleteAllNotifications}
        handleReadingOneNotification={readOneNotification}
        handleReadingAllNotification={readAllNotifications}
        unreadNotificationsCount={formatUnreadNotificationsCount(unreadNotifications)}
        readAllNotificationLoading={readAllLoading}
    />
}

export default NotificationContainer;