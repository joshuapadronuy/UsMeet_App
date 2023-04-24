export interface IParticipantsState {
  participantsList: string[];
  searchInput: string;
}

export interface IMouseDownState {
  isMouseDown: boolean;
}

export interface IReduxState {
  mouseDown: IMouseDownState;
  participants: IParticipantsState;
}
