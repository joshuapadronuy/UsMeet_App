import { createSlice } from "@reduxjs/toolkit";
import { IParticipantsAction } from "../../types/ParticipantsAction";
import { IParticipantsState } from "../../types/ReduxState";

const MOCK_PARTICIPANTS = [
  "Joshua",
  "Ron",
  "Sewart",
  "Hansel",
  "Ron",
  "Sewart",
  "Hansel",
];

const initialState: IParticipantsState = {
  participantsList: MOCK_PARTICIPANTS,
  searchInput: "",
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
    addParticipant: (state, action: IParticipantsAction) => {
      const newParticipant = action.payload.participantName;
      state.participantsList.push(newParticipant);
    },
    updateParticipant: (state, action: IParticipantsAction) => {
      const selectedParticipant = action.payload.index;
      const newName = action.payload.newName;
      state.participantsList[selectedParticipant] = newName;
    },
    removeParticipant: (state, action: IParticipantsAction) => {
      const selectedParticipant = action.payload.index;
      // only splice array when item is found
      if (selectedParticipant > -1) {
        state.participantsList.splice(selectedParticipant, 1); // 2nd parameter means remove one item only
      }
    },
  },
});

export const {
  setParticipants,
  setSearchInput,
  addParticipant,
  updateParticipant,
  removeParticipant,
} = participantsSlice.actions;

export default participantsSlice.reducer;
