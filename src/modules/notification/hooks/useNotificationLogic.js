import axiosInstance from "../../../api/axiosInstance";
import {
    setAllNotificationsAction,
    setAllNotificationsLoading, setUnreadNotificationCountLoading,
    setUnreadNotificationsCountAction
} from "../redux/notifications";
import {useDispatch, useSelector} from "react-redux";

const useNotificationLogic = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.notificationReducer),
        allNotification = selector.all,
        allNotificationsLoading = selector.showAllLoading,
        unreadNotifications = selector.unreadCount,
        unreadNotificationsLoading = selector.unreadCountLoading;

    const getAllNotifications = () => {
        if (allNotification.length === 0) {
            dispatch(setAllNotificationsLoading(true))

            axiosInstance.get('/notifications')
                .then((result) => {
                    dispatch(setAllNotificationsAction(result.data.data))
                })
                .finally(() => dispatch(setAllNotificationsLoading(false)))
        }
    }

    const unreadNotificationsCount = () => {
        dispatch(setUnreadNotificationCountLoading(true))

        axiosInstance
            .get('notifications/unread_notifications_count')
            .then((result) => {
                dispatch(setUnreadNotificationsCountAction(result.data.data['unreadNotificationsCount']))
            })
            .finally(() => dispatch(setUnreadNotificationCountLoading(false)))
    }

    return {
        getAllNotifications,
        unreadNotificationsCount,
        allNotification,
        allNotificationsLoading,
        unreadNotifications,
        unreadNotificationsLoading
    }
}

export default useNotificationLogic;