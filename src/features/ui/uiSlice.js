import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navMenuIsOpen: false,
  darkThemeActive: true,
  themeSwitcherHasBeenClicked: false,
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
    setThemeSwitcherHasBeenClicked: (state) => {
      return {
        ...state,
        themeSwitcherHasBeenClicked: true,
      };
    },
  },
});

export const {
  reset,
  setNavMenuIsOpen,
  setDarkThemeActive,
  setThemeSwitcherHasBeenClicked,
} = uiSlice.actions;
export default uiSlice.reducer;
