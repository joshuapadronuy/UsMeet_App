import { configureStore } from "@reduxjs/toolkit";
import mouseDownReducer from "./slices/mouse-down-slice";
import participantsReducer from "./slices/participants-slice";
import menuReducer from "./slices/menu-slice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    mouseDown: mouseDownReducer,
    participants: participantsReducer,
  },
});
