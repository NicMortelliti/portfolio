import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navMenuIsOpen: false,
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
  },
});

export const { reset, setNavMenuIsOpen } = uiSlice.actions;
export default uiSlice.reducer;
