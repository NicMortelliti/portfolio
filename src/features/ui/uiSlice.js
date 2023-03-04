import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navMenuIsOpen: false,
  darkThemeActive: false,
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
        ...state,
        navMenuIsOpen: !state.navMenuIsOpen,
      };
    },
    setDarkThemeActive: (state) => {
      return {
        ...state,
        darkThemeActive: !state.darkThemeActive,
      };
    },
  },
});

export const { reset, setNavMenuIsOpen, setDarkThemeActive } = uiSlice.actions;
export default uiSlice.reducer;
