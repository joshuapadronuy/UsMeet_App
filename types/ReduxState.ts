import { IMenu } from "./Menu";

export interface IMenuState {
  menuItems: IMenu[];
  selectedMainMenu: string;
  selectedSubMenu: string;
}

export interface IParticipant {
  id: string;
  name: string;
}

export interface IParticipantsState {
  participantsList: IParticipant[];
  searchInput: string;
}

export interface IMouseDownState {
  isMouseDown: boolean;
}

export interface IReduxState {
  mouseDown: IMouseDownState;
  participants: IParticipantsState;
}
