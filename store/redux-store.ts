import { configureStore } from "@reduxjs/toolkit";
import mouseDownReducer from "./slices/mouse-down-slice";
import participantsReducer from "./slices/participants-slice";

export const store = configureStore({
  reducer: {
    mouseDown: mouseDownReducer,
    participants: participantsReducer,
  },
});
