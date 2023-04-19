import AddParticipant from "./ParticipantMenu/AddParticipant";
import ParticipantsSectionStyles from "../../styles/ParticipantsSection.module.css";
import TextField from "../UI/TextField";
import { useState } from "react";
import FillOutName from "./ParticipantMenu/FillOutName";
import ParticipantsList from "./ParticipantsList/ParticipantsList";

const ParticipantsSection = () => {
  const [showAddParticipant, setShowAddParticipant] = useState(false);

  const toggleAddParticipant = () => {
    setShowAddParticipant((currShowAdd) => !currShowAdd);
  };

  return (
    <div className={ParticipantsSectionStyles.rootContainer}>
      {/* header */}
      <div className={ParticipantsSectionStyles.header}>
        <h2>Participants</h2>
      </div>
      {/* search and add new participant */}
      <div className={ParticipantsSectionStyles.tools}>
        <TextField placeholder="Search Participant..." />
        <AddParticipant onClickHandler={toggleAddParticipant} />
      </div>
      {/* adding new participant field */}
      {showAddParticipant && <FillOutName />}
      <ParticipantsList />
    </div>
  );
};

export default ParticipantsSection;
