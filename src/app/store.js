import { configureStore } from "@reduxjs/toolkit";
import tabOptionReducer from "../features/TabOptionSlice";
import budgetReducer from "../features/BudgetSlice";

export default configureStore({
  reducer: {
    tabOption: tabOptionReducer,
    budget: budgetReducer,
  },
});
