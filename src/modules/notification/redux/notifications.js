import {createSlice} from "@reduxjs/toolkit";
import { resetStoreMethod } from "../../../utility/reduxHelper";

const initialState = {
    showAllLoading: false,
    showOneLoading: false,
    readOneLoading: false,
    readAllLoading: false,
    deleteOneLoading: false,
    deleteAllLoading: false,
    unreadCountLoading: false,
    all: [],
    unreadCount: 0
}

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setAllNotificationsAction: (state, action) => {
            state.data = action.payload
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
        ...resetStoreMethod(initialState)
    }
})

export default notificationSlice.reducer;
export const {
    setAllNotificationsAction,
    setAllNotificationsLoading,
    setUnreadNotificationsCountAction,
    setUnreadNotificationCountLoading
} = notificationSlice.actions