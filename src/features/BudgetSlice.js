import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    schedule:
      //get schedule array from local storage
      JSON.parse(localStorage.getItem("schedule")) || [],
  },
  reducers: {
    SET_BUDGET_SCHEDULE: (state, action) => {
      state.schedule = action.payload;
    },
    UPDATE_BUDGET_SCHEDULE: (state, action) => {
      const { date, id, selectedOption } = action.payload;
      return {
        //return the new schedule with the updated budget
        schedule: state.schedule.map((item) => {
          if (item.date === date) {
            return {
              ...item,
              [id]: selectedOption,
            };
          }
          return item;
        }),
      };
    },
  },
});

export const { SET_BUDGET_SCHEDULE, UPDATE_BUDGET_SCHEDULE } =
  budgetSlice.actions;
export const selectBudget = (state) => state.budget.schedule;

export default budgetSlice.reducer;
