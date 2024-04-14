import axiosInstance from "../../../api/axiosInstance";
import {
    setAllNotificationMetaAction,
    setAllNotificationsAction,
    setAllNotificationsLoading, setAllNotificationsNextPageLoading,
    // setAllNotificationsNextPageLoading,
    setReadAllNotificationLoading,
    setReadOneNotificationLoadingAction,
    setUnreadNotificationCountLoading,
    setUnreadNotificationsCountAction
} from "../redux/notifications";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";

const useNotificationLogic = () => {
    const dispatch = useDispatch();
    const [isDeleting, setIsDeleting] = useState(false)
    const selector = useSelector(state => state.notificationReducer),
        allNotification = selector.all.data,
        allNotificationsMeta = selector.all.meta,
        nextPageLoading = selector.nextPageLoading,
        allNotificationsLoading = selector.showAllLoading,
        unreadNotifications = selector.unreadCount,
        readAllLoading = selector.readAllLoading,
        unreadNotificationsLoading = selector.unreadCountLoading;

    const getAllNotifications = () => {

        if (allNotification.length === 0) {
            dispatch(setAllNotificationsLoading(true))

            axiosInstance.get('/notifications', {params: {per_page: 10}})
                .then((result) => {
                    dispatch(setAllNotificationsAction(result.data.data))
                    dispatch(setAllNotificationMetaAction(result.data.meta))
                })
                .finally(() => dispatch(setAllNotificationsLoading(false)))
        }
    }

    const shouldFetchNextPage = () => {
        return  nextPageLoading === false
            && allNotificationsLoading === false
            && !!allNotification[0]
            && allNotificationsMeta.currentPage < allNotificationsMeta.lastPage
    }

    const fetchNextPage = () => {
        if (shouldFetchNextPage()) {
            console.log('fetch now !')
            dispatch(setAllNotificationsLoading(true))
            dispatch(setAllNotificationsNextPageLoading(true))

            axiosInstance
                .get('/notifications', {params:  {per_page: 10, page: allNotificationsMeta.currentPage + 1}})
                .then((result) => {
                    dispatch(setAllNotificationsAction([...allNotification, ...result.data.data]))
                    dispatch(setAllNotificationMetaAction(result.data.meta))
                })
                .finally(() => {
                    dispatch(setAllNotificationsLoading(false))
                    dispatch(setAllNotificationsNextPageLoading(false))
                })
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

        setIsDeleting(true)
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
                setIsDeleting(false)
            })
    }

    const deleteAllNotifications = () => {
        let tmpNotifications = [...allNotification],
            tmpCount = unreadNotifications

        setIsDeleting(true)
        dispatch(setAllNotificationsAction([]))
        dispatch(setUnreadNotificationsCountAction(0))

        axiosInstance.delete('/notifications')
        .catch(() => {
            dispatch(setAllNotificationsAction(tmpNotifications))
            dispatch(setUnreadNotificationsCountAction(tmpCount))
        })
        .finally(() => {
            tmpNotifications = tmpCount = null;
            setIsDeleting(false)
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
        fetchNextPage,
        allNotification,
        allNotificationsLoading,
        unreadNotifications,
        unreadNotificationsLoading,
        readAllLoading,
        nextPageLoading,
        isDeleting
    }
}

export default useNotificationLogic;