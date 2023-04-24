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
