import {createSlice} from "@reduxjs/toolkit";
import { resetStoreMethod } from "../../../utility/reduxHelper";
import { paginationInitialValues, setPaginationAction } from "../../../helpers/reduxHelper";

const initialState = {
  all: {
    data: [],
    loading: false,
    ...paginationInitialValues()
  }
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setAllCategoriesAction: (state, action) => {
            state.all.data = action.payload
        },
        setAllCategoriesMetaAction: (state, action) => {
            state.all.meta = setPaginationAction(action)
        },
        setAllCategoriesLoading: (state, action) => {
            state.all.loading = action.payload;
        },
        ...resetStoreMethod(initialState)
    }
})

export default categorySlice.reducer;
export const {
    setAllCategoriesAction,
    setAllCategoriesMetaAction,
    setAllCategoriesLoading
} = categorySlice.actions