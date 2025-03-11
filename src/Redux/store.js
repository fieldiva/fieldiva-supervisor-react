import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./Reducers/HeaderReducer";
import allModalSlice from "./Reducers/allModalReducer";
const store = configureStore({
  reducer: {
    header: HeaderSlice,
    modal: allModalSlice,
  },
});

export default store;
