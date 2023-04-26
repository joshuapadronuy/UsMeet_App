import { IMenu } from "../types/Menu";

export const MENU: IMenu[] = [
  {
    NAME: "PLOT AVAILABILITY",
    selectedSubMenu: "ADD",
    SUB_MENU: ["ADD", "REMOVE"],
  },
  {
    NAME: "VIEW POLLED AVAILABILITIES",
    selectedSubMenu: "GRID VIEW",
    SUB_MENU: ["GRID VIEW", "BAR GRAPH"],
  },
];
