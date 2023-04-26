import { IMenu } from "./Menu";

export interface IMenuState {
  menuItems: IMenu[];
  selectedMainMenu: string;
}

export interface IParticipant {
  id: string;
  name: string;
}

export interface IParticipantsState {
  participantsList: IParticipant[];
  searchInput: string;
  selectedParticipant: IParticipant;
}

export interface IMouseDownState {
  isMouseDown: boolean;
}

export interface IReduxState {
  menu: IMenuState;
  mouseDown: IMouseDownState;
  participants: IParticipantsState;
}
