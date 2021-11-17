import { createSlice } from "@reduxjs/toolkit";

export const tabOptionSlice = createSlice({
  name: "tabOption",
  initialState: {
    tabOption: 0,
  },
  reducers: {
    SET_TABOPTION: (state, action) => {
      state.tabOption = action.payload;
    },
  },
});

export const { SET_TABOPTION } = tabOptionSlice.actions;
export const selectTabOption = (state) => state.tabOption.tabOption;

export default tabOptionSlice.reducer;
