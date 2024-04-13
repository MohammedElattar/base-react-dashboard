// ** Redux Imports
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userInfo: {},
    isLoading: false,
    code: 0
}

export const loginSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfoLoadingReducer: (state, action) => {
            state.isLoading = action.payload;
        },
        setUserInfoReducer: (state, action) => {
            state.userInfo = action.payload;
        },
        setUserInfoCodeReducer: (state, action) => {
            state.code = action.payload
        },
        resetUserInfoReducer: (state) => {
            state.userInfo = initialState.userInfo
        },
        resetCodeReducer: (state) => {
            state.code = initialState.code
        },
        resetTokenReducer: (state) => {
            state.token = initialState.token
        },
        resetLoginReducer: (state) => {
            state.code = initialState.code
            state.token = initialState.token
            state.userInfo = initialState.userInfo
        }
    }
})

export default loginSlice.reducer
export const {
    setUserInfoLoadingReducer,
    setUserInfoCodeReducer,
    setUserInfoReducer,
    resetTokenReducer,
    resetCodeReducer,
    resetUserInfoReducer,
    resetLoginReducer
} = loginSlice.actions;