import { createSlice } from "@reduxjs/toolkit";
import { IMenuState } from "../../types/ReduxState";
import { MENU } from "../../constants/menu";
import { IMenuAction } from "../../types/MenuAction";

const initialState: IMenuState = {
  menuItems: MENU,
  selectedMainMenu: MENU[0].NAME,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: IMenuAction) => {
      state.menuItems = action.payload.menu;
    },
    setSelectedMainMenu: (state, action: IMenuAction) => {
      state.selectedMainMenu = action.payload.mainMenuSelected;
    },
    setSelectedSubMenu: (state, action: IMenuAction) => {
      const mainMenu = state.selectedMainMenu;
      const mainMenuIndex = state.menuItems.findIndex(
        (menuItem) => menuItem.NAME === mainMenu
      );

      const newSubMenu = action.payload.subMenuSelected;
      const updatedMenuItem = {
        ...state.menuItems[mainMenuIndex],
        selectedSubMenu: newSubMenu,
      };

      state.menuItems[mainMenuIndex] = updatedMenuItem;
    },
  },
});

export const { setMenu, setSelectedMainMenu, setSelectedSubMenu } =
  menuSlice.actions;

export default menuSlice.reducer;
