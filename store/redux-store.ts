import { configureStore } from "@reduxjs/toolkit";
import mouseDownReducer from "./slices/mouse-down-slice";

export const store = configureStore({
  reducer: {
    mouseDown: mouseDownReducer,
  },
});
