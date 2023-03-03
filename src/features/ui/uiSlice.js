import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navMenuIsOpen: false,
  darkThemeActive: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    setNavMenuIsOpen: (state) => {
      return {
        navMenuIsOpen: !state.navMenuIsOpen,
      };
    },
    setDarkThemeActive: (state) => {
      return {
        darkThemeActive: !state.darkThemeActive,
      };
    },
  },
});

export const { reset, setNavMenuIsOpen, setDarkThemeActive } = uiSlice.actions;
export default uiSlice.reducer;
