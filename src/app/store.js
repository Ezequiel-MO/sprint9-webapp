import { configureStore } from "@reduxjs/toolkit";
import tabOptionReducer from "../features/TabOptionSlice";
import selectedBudgetReducer from "../features/SelectedBudgetSlice";

export default configureStore({
  reducer: {
    tabOption: tabOptionReducer,
    selectedBudget: selectedBudgetReducer,
  },
});
