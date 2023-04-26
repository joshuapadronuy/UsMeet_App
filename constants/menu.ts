import {
  MAIN_MENU,
  PLOT_AVAILABILITY_SUB,
  VIEW_POLLED_AVAILABILITIES_SUB,
} from "../enum/menu";
import { IMenu } from "../types/Menu";

export const MENU: IMenu[] = [
  {
    NAME: MAIN_MENU.PLOT_AVAILABILITY,
    selectedSubMenu: "ADD",
    SUB_MENU: Object.values(PLOT_AVAILABILITY_SUB),
  },
  {
    NAME: MAIN_MENU.VIEW_POLLED_AVAILABILITIES,
    selectedSubMenu: "GRID VIEW",
    SUB_MENU: Object.values(VIEW_POLLED_AVAILABILITIES_SUB),
  },
];
