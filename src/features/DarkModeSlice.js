import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    TOGGLE_DARKMODE: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { TOGGLE_DARKMODE } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkMode.darkMode;

export default darkModeSlice.reducer;
