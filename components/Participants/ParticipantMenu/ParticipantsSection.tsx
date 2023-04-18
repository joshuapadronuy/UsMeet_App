import SearchParticipant from "../SearchParticipant";
import AddParticipant from "./AddParticipant";
import ParticipantsSectionStyles from "../../../styles/ParticipantsSection.module.css";

const ParticipantsSection = () => {
  return (
    <div className={ParticipantsSectionStyles.rootContainer}>
      {/* header */}
      <div className={ParticipantsSectionStyles.header}>
        <h2>Participants</h2>
      </div>
      {/* search and add new participant */}
      <div>
        <AddParticipant />
        <SearchParticipant />
      </div>
      <p>participantList</p>
    </div>
  );
};

export default ParticipantsSection;
