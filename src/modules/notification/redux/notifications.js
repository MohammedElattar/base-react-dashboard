import {createSlice} from "@reduxjs/toolkit";
import { resetStoreMethod, paginationInitialValues, setPaginationAction} from "../../../utility/helpers/reduxHelper";

const initialState = {
    showAllLoading: false,
    nextPageLoading: false,
    showOneLoading: false,
    readOneLoading: false,
    readAllLoading: false,
    deleteOneLoading: false,
    deleteAllLoading: false,
    unreadCountLoading: false,
    all: {
        data: [],
        ...paginationInitialValues()
    },
    unreadCount: 0
}

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setAllNotificationsAction: (state, action) => {
            state.all.data = action.payload
        },
        setAllNotificationMetaAction: (state, action) => {
            state.all.meta = setPaginationAction(action)
        },
        setAllNotificationsNextPageLoading: (state, action) => {
            state.nextPageLoading = action.payload
        },
        setAllNotificationsLoading: (state, action) => {
            state.showAllLoading = action.payload;
        },
        setUnreadNotificationsCountAction: (state, action) => {
            state.unreadCount = action.payload;
        },
        setUnreadNotificationCountLoading: (state, action) => {
            state.unreadCountLoading = action.payload;
        },
        setReadOneNotificationLoadingAction: (state, action) => {
            state.readOneLoading = action.payload
        },
        setReadAllNotificationLoading: (state, action) => {
            state.readAllLoading = action.payload;
        },
        ...resetStoreMethod(initialState)
    }
})

export default notificationSlice.reducer;
export const {
    setAllNotificationsAction,
    setAllNotificationMetaAction,
    setAllNotificationsLoading,
    setUnreadNotificationsCountAction,
    setUnreadNotificationCountLoading,
    setReadOneNotificationLoadingAction,
    setReadAllNotificationLoading,
    setAllNotificationsNextPageLoading
} = notificationSlice.actions