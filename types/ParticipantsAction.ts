import { IParticipant } from "./ReduxState";

export interface IParticipantsPayload {
  participants?: IParticipant[];
  participantName?: string;
  id?: string;
  newName?: string;
  searchInput?: string;
}

export interface IParticipantsAction {
  payload: IParticipantsPayload;
  type: string;
}
