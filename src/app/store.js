import { configureStore } from "@reduxjs/toolkit";
import tabOptionReducer from "../features/TabOptionSlice";

export default configureStore({
  reducer: {
    tabOption: tabOptionReducer,
  },
});
