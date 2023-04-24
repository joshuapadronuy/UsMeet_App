import { createSlice } from "@reduxjs/toolkit";
import { IMouseDownState } from "../../types/ReduxState";

const initialState: IMouseDownState = {
  isMouseDown: false,
};

export const mouseDownSlice = createSlice({
  name: "mouseDown",
  initialState,
  reducers: {
    setMouseDownTrue: (state) => {
      state.isMouseDown = true;
    },
    setMouseDownFalse: (state) => {
      state.isMouseDown = false;
    },
  },
});

export const { setMouseDownTrue, setMouseDownFalse } = mouseDownSlice.actions;

export default mouseDownSlice.reducer;
