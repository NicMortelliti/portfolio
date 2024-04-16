import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navMenuIsOpen: false,
  darkThemeActive: true,
  themeSwitcherHasBeenClicked: false,
  featureFlags: {
    linksToProjects: { enabled: false },
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    reset: () => initialState,
    setNavMenuIsOpen: (state) => ({
      ...state,
      navMenuIsOpen: !state.navMenuIsOpen,
    }),
    setDarkThemeActive: (state) => ({
      ...state,
      darkThemeActive: !state.darkThemeActive,
    }),
    setThemeSwitcherHasBeenClicked: (state) => ({
      ...state,
      themeSwitcherHasBeenClicked: true,
    }),
  },
});

export const {
  reset, setNavMenuIsOpen, setDarkThemeActive, setThemeSwitcherHasBeenClicked,
} = uiSlice.actions;
export default uiSlice.reducer;
