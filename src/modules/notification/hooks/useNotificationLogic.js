import axios from "axios";
import axiosInstance from "../../../api/axiosInstance";
import {
    setAllNotificationsAction,
    setAllNotificationsLoading, setReadAllNotificationLoading, setReadOneNotificationLoadingAction, setUnreadNotificationCountLoading,
    setUnreadNotificationsCountAction
} from "../redux/notifications";
import { useDispatch, useSelector } from "react-redux";

const useNotificationLogic = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.notificationReducer),
        allNotification = selector.all,
        allNotificationsLoading = selector.showAllLoading,
        unreadNotifications = selector.unreadCount,
        readAllLoading = selector.readAllLoading,
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
                dispatch(setUnreadNotificationsCountAction(result.data.data.unreadNotificationsCount))
            })
            .finally(() => dispatch(setUnreadNotificationCountLoading(false)))
    }

    const deleteOneNotification = (index) => {
        let item = allNotification[index],
            tmpNotifications = [...allNotification],
            tmpAllNotifications = [...allNotification],
            tmpCount = unreadNotifications

        tmpNotifications.splice(index, 1)

        dispatch(setAllNotificationsAction(tmpNotifications))
        dispatch(setUnreadNotificationsCountAction(tmpCount - (item.seen === false ? 1 : 0)))

        axiosInstance
            .delete(`/notifications/${item.id}`)
            .catch(() => {
                dispatch(setUnreadNotificationsCountAction(tmpCount))
                dispatch(setAllNotificationsAction(tmpAllNotifications))
            })
            .finally(() => {
                item = tmpNotifications = tmpAllNotifications = tmpCount = null;
            })
    }

    const deleteAllNotifications = () => {
        let tmpNotifications = [...allNotification],
            tmpCount = unreadNotifications

        dispatch(setAllNotificationsAction([]))
        dispatch(setUnreadNotificationsCountAction(0))

        axiosInstance.delete('/notifications')
        .catch(() => {
            dispatch(setAllNotificationsAction(tmpNotifications))
            dispatch(setUnreadNotificationsCountAction(tmpCount))
        })
        .finally(() => {
            tmpNotifications = tmpCount = null;
        })
    }

    const readOneNotification = (index) => {
        let item = allNotification[index]

        if (item !== undefined) {
            let tmpNotifications = [...allNotification],
                tmpAllNotifications = [...allNotification],
                tmpCount = unreadNotifications

            item = { ...item, ...{ seen: true } }

            tmpAllNotifications = tmpAllNotifications.map((notification) => (notification.id === item.id ? item : notification))

            dispatch(setAllNotificationsAction(tmpAllNotifications))
            dispatch(setUnreadNotificationsCountAction(tmpCount - 1))

            setReadOneNotificationLoadingAction(true)

            axiosInstance
                .patch(`/notifications/${item.id}`)
                .then(() => dispatch(setUnreadNotificationsCountAction(unreadNotifications - 1)))
                .catch(() => {
                    dispatch(setAllNotificationsAction(tmpNotifications))
                    dispatch(setUnreadNotificationsCountAction(tmpCount))
                })
                .finally(() => {
                    item = tmpAllNotifications = tmpNotifications = tmpCount = null
                    setReadOneNotificationLoadingAction(false)
                })
        }
    }


    const readAllNotifications = () => {
        let tmpNotifications = [...allNotification],
            tmpCount = unreadNotifications,
            tmpAllNotifications = [...allNotification]

        tmpAllNotifications = tmpAllNotifications.map((notification) => ({ ...notification, ...{ seen: true } }))

        dispatch(setAllNotificationsAction(tmpAllNotifications))
        dispatch(setUnreadNotificationsCountAction(0))

        dispatch(setReadAllNotificationLoading(true))

        axiosInstance.patch('/notifications')
            .catch(() => {
                dispatch(setAllNotificationsAction(tmpNotifications))
                dispatch(setUnreadNotificationsCountAction(tmpCount))
            })
            .finally(() => {
                tmpNotifications = tmpCount = tmpAllNotifications = null;
                dispatch(setReadAllNotificationLoading(false))
            })
    }

    return {
        getAllNotifications,
        unreadNotificationsCount,
        deleteOneNotification,
        deleteAllNotifications,
        readOneNotification,
        readAllNotifications,
        allNotification,
        allNotificationsLoading,
        unreadNotifications,
        unreadNotificationsLoading,
        readAllLoading
    }
}

export default useNotificationLogic;