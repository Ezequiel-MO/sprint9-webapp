import { configureStore } from "@reduxjs/toolkit";
import tabOptionReducer from "../features/TabOptionSlice";
import budgetReducer from "../features/BudgetSlice";
import darkModeReducer from "../features/DarkModeSlice";

export default configureStore({
  reducer: {
    tabOption: tabOptionReducer,
    budget: budgetReducer,
    darkMode: darkModeReducer,
  },
});
