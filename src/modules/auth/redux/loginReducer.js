// ** Redux Imports
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userInfo: [],
    isLoading: false,
    code: 0
}

export const loginSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfoLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setUserInfoCode: (state, action) => {
            state.code = action.payload
        }
    }
})

export default loginSlice.reducer
export const {
    setUserInfoLoading,
    setUserInfo,
    setUserInfoCode
} = loginSlice.actions;