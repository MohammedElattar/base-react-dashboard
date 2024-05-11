import rootReducer from "./rootReducer"
import { configureStore } from "@reduxjs/toolkit"
import {loginSlice} from "../modules/auth/redux/loginReducer";
import {notificationSlice} from "../modules/notification/redux/notifications";
import { RESET_REDUCER_KEY } from "../utility/helpers/reduxHelper";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

const allSlices = [loginSlice, notificationSlice]

export const resetStore = () => {
  allSlices.forEach((slice) => {
    store.dispatch({type: `${slice.name}/${RESET_REDUCER_KEY}`})
  })
};

export { store }
