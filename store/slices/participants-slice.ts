import { createSlice } from "@reduxjs/toolkit";
import { v4 as UUIDv4 } from "uuid";

import { IParticipantsAction } from "../../types/ParticipantsAction";
import { IParticipantsState } from "../../types/ReduxState";

const MOCK_PARTICIPANTS = [
  { id: "fj2398fj2", name: "Joshua" },
  { id: "f23f2f", name: "Ron" },
  { id: "fdsaf", name: "Sewart" },
  { id: "vadv", name: "Hansel" },
  { id: "bvxb", name: "Ron" },
  { id: "hfgs", name: "Sewart" },
  { id: "kuk6", name: "Hansel" },
];

const initialState: IParticipantsState = {
  participantsList: MOCK_PARTICIPANTS,
  searchInput: "",
  selectedParticipant: null,
};

export const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    //TODO INTEGRATE WITH DB
    setParticipants: (state, action: IParticipantsAction) => {
      state.participantsList = action.payload.participants;
    },
    setSearchInput: (state, action: IParticipantsAction) => {
      state.searchInput = action.payload.searchInput;
    },
    setSelectedParticipant: (state, action: IParticipantsAction) => {
      const selectedParticipant = state.participantsList.find(
        (participant) => participant.id == action.payload.id
      );
      state.selectedParticipant = selectedParticipant;
    },
    addParticipant: (state, action: IParticipantsAction) => {
      const name = action.payload.participantName;
      const newParticipant = { id: UUIDv4(), name: name };
      state.participantsList.unshift(newParticipant);
    },
    //TODO IMPLEMENT
    updateParticipant: (state, action: IParticipantsAction) => {
      const selectedParticipant = action.payload.id;
      const newName = action.payload.newName;
      state.participantsList[selectedParticipant].name = newName;
    },
    removeParticipant: (state, action: IParticipantsAction) => {
      const selectedParticipant = action.payload.id;
      const filteredParticipants = state.participantsList.filter(
        (participant) => participant.id !== selectedParticipant
      );
      state.participantsList = filteredParticipants;
    },
  },
});

export const {
  setParticipants,
  setSearchInput,
  setSelectedParticipant,
  addParticipant,
  updateParticipant,
  removeParticipant,
} = participantsSlice.actions;

export default participantsSlice.reducer;
