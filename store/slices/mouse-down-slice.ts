import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
