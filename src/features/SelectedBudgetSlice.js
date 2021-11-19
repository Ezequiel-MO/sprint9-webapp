import { createSlice } from "@reduxjs/toolkit";

export const selectedBudgetSlice = createSlice({
  name: "selectedBudget",
  initialState: {
    pax: 0,
    selectedEvents: [],
    selectedLunches: [],
    selectedDinners: [],
  },
  reducers: {
    SET_PAX: (state, action) => {
      state.pax = { ...state, pax: action.payload };
    },
    SET_SELECTEDEVENTS: (state, action) => {
      state.selectedEvents = {
        ...state,
        selectedEvents: [...state.selectedEvents, action.payload],
      };
    },
    SET_SELECTEDLUNCHES: (state, action) => {
      state.selectedLunches = {
        ...state,
        selectedLunches: [...state.selectedLunches, action.payload],
      };
    },
    SET_SELECTEDDINNERS: (state, action) => {
      state.selectedDinners = {
        ...state,
        selectedDinners: [...state.selectedDinners, action.payload],
      };
    },
  },
});

export const {
  SET_PAX,
  SET_SELECTEDEVENTS,
  SET_SELECTEDLUNCHES,
  SET_SELECTEDDINNERS,
} = selectedBudgetSlice.actions;
export const selectSelectedBudget = (state) =>
  state.selectedBudget.selectedBudget;

export default selectedBudgetSlice.reducer;
