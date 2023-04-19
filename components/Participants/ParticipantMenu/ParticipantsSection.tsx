import AddParticipant from "./AddParticipant";
import ParticipantsSectionStyles from "../../../styles/ParticipantsSection.module.css";
import SearchField from "../../UI/SearchField";
import { useState } from "react";

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
        <SearchField placeholder="Search Participant..." />
        <AddParticipant onClickHandler={toggleAddParticipant} />
      </div>
      {showAddParticipant && <div>showAddParticipant</div>}
      <p>participantList</p>
    </div>
  );
};

export default ParticipantsSection;
