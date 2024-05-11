import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    all: false,
    show: false,
    store: false,
    update: false,
    delete: false
}

export const categoriesLoading = createSlice({
    initialState,
    name: 'categories',
  reducers: {
      allCategoriesLoadingAction: (state, action) => {
          state.all = action.payload
      },
      oneCategoryLoadingAction: (state, action) => {
          state.show = action.payload;
      },
      storeCategoryLoadingAction: (state, action) => {
          state.store = action.payload;
      },
      updateCategoryLoadingAction: (state, action) => {
          state.update = action.payload;
      },
      deleteCategoryLoadingAction: (state, action) => {
          state.delete = action.payload
      }
  }
})

export default categoriesLoading.reducer
export const {
    allCategoriesLoadingAction,
    oneCategoryLoadingAction,
    storeCategoryLoadingAction,
    updateCategoryLoadingAction,
    deleteCategoryLoadingAction
} = categoriesLoading.actions;