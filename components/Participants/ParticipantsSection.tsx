import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddParticipant from "./ParticipantMenu/AddParticipant";
import ParticipantsSectionStyles from "../../styles/ParticipantsSection.module.css";
import TextField from "../UI/TextField";
import FillOutName from "./ParticipantMenu/FillOutName";
import ParticipantsList from "./ParticipantsList/ParticipantsList";
import { IReduxState } from "../../types/ReduxState";
import { setSearchInput } from "../../store/slices/participants-slice";

const ParticipantsSection = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector(
    (state: IReduxState) => state.participants.searchInput
  );
  const [showAddParticipant, setShowAddParticipant] = useState(false);

  const toggleAddParticipant = () => {
    setShowAddParticipant((currShowAdd) => !currShowAdd);
  };

  const searchFieldHandler = (event) => {
    const searchWord = event.target.value;
    dispatch(setSearchInput({ searchInput: searchWord }));
  };

  return (
    <div className={ParticipantsSectionStyles.rootContainer}>
      {/* header */}
      <div className={ParticipantsSectionStyles.header}>
        <h2>Participants</h2>
      </div>
      {/* search and add new participant */}
      <div className={ParticipantsSectionStyles.tools}>
        <TextField.Input
          placeholder="Search Participant..."
          value={searchInput}
          onChange={searchFieldHandler}
        />
        <AddParticipant onClickHandler={toggleAddParticipant} />
      </div>
      {/* adding new participant field */}
      {showAddParticipant && (
        <FillOutName setShowAddParticipant={setShowAddParticipant} />
      )}
      <ParticipantsList />
    </div>
  );
};

export default ParticipantsSection;
