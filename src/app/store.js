import { configureStore } from "@reduxjs/toolkit";

// Reducers
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
