import { createSlice } from "@reduxjs/toolkit";

export const selectedBudgetSlice = createSlice({
  name: "selectedBudget",
  initialState: {
    pax: 0,
    selectedMorningEvents: [],
    selectedLunches: [],
    selectedAfternoonEvents: [],
    selectedDinners: [],
  },
  reducers: {
    SET_PAX: (state, action) => {
      state.pax = { ...state, pax: action.payload };
    },
    SET_SELECTEDMORNINGEVENTS: (state, action) => {
      state.selectedMorningEvents = {
        ...state,
        selectedMorningEvents: [...state.selectedMorningEvents, action.payload],
      };
    },
    SET_SELECTEDLUNCHES: (state, action) => {
      state.selectedLunches = {
        ...state,
        selectedLunches: [...state.selectedLunches, action.payload],
      };
    },
    SET_SELECTEDAFTERNOONEVENTS: (state, action) => {
      state.selectedAfternoonEvents = {
        ...state,
        selectedAfternoonEvents: [
          ...state.selectedAfternoonEvents,
          action.payload,
        ],
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
  SET_SELECTEDAFTERNOONEVENTS,
  SET_SELECTEDDINNERS,
} = selectedBudgetSlice.actions;
export const selectSelectedBudget = (state) =>
  state.selectedBudget.selectedBudget;

export default selectedBudgetSlice.reducer;
