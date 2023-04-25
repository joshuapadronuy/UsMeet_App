import { createSlice } from "@reduxjs/toolkit";
import { IMenuState } from "../../types/ReduxState";
import { MENU } from "../../constants/menu";
import { IMenuAction } from "../../types/MenuAction";

const initialState: IMenuState = {
  menuItems: MENU,
  selectedMainMenu: "",
  selectedSubMenu: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: IMenuAction) => {
      state.menuItems = action.payload.menu;
    },
    setSelectedMainMenu: (state, action: IMenuAction) => {
      state.selectedMainMenu = action.payload.menuSelected;
    },
    setSelectedSubMenu: (state, action: IMenuAction) => {
      state.selectedSubMenu = action.payload.menuSelected;
    },
  },
});

export const { setMenu, setSelectedMainMenu, setSelectedSubMenu } =
  menuSlice.actions;

export default menuSlice.reducer;
