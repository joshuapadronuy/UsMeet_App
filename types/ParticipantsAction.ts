export interface IParticipantsPayload {
  participants?: string[];
  participantName?: string;
  index?: number;
  newName?: string;
  searchInput?: string;
}

export interface IParticipantsAction {
  payload: IParticipantsPayload;
  type: string;
}
