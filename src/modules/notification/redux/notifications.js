import {createSlice} from "@reduxjs/toolkit";
import { resetStoreMethod } from "../../../utility/reduxHelper";

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
        meta: {
            currentPage: 1,
            from: 1,
            lastPage: 1
        }
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
            state.all.meta = {
                from: action.payload.from,
                currentPage: action.payload.current_page,
                lastPage: action.payload.last_page
            }
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