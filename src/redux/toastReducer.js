import {createSlice} from "@reduxjs/toolkit";
import {resetStoreMethod} from "../utility/helpers/reduxHelper";

const initialState = {
    loading: {message: 'Loading...', status: false}
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToastLoading: (state, action) => {
            if (typeof action.payload === "boolean") {
                state.loading.status = action.payload;
            } else {
                state.loading = action.payload;
            }
        },
        ...resetStoreMethod(initialState)
    }
})

export default toastSlice.reducer;
export const {
    setToastLoading
} = toastSlice.actions