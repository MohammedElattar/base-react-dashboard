import {createSlice} from "@reduxjs/toolkit";
import {paginationInitialValues, resetStoreMethod, setPaginationAction} from "../../../utility/helpers/reduxHelper";

const initialState = {
    all: {
        data: [],
        ...paginationInitialValues()
    },
    show: {
        name: ''
    },
    store: {
        code: 0,
        loading: false
    },
    update: {
        code: 0,
        loading: false
    },
    delete: {
        code: 0,
        loading: false
    }
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setAllCategoriesAction: (state, action) => {
            state.all.data = action.payload;
        },
        setAllCategoriesMetaAction: (state, action) => {
            state.all.meta = setPaginationAction(action)
        },
        setOneCategoryAction: (state, action) => {
            state.show = action.payload;
        },
        ...resetStoreMethod(initialState)
    }
})

export default categorySlice.reducer;
export const {
    setAllCategoriesAction,
    setAllCategoriesMetaAction,
    setOneCategoryAction
} = categorySlice.actions