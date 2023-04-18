import SearchParticipant from "../SearchParticipant";
import AddParticipant from "./AddParticipant";
import ParticipantsSectionStyles from "../../../styles/ParticipantsSection.module.css";

const ParticipantsSection = () => {
  return (
    <div>
      {/* header */}
      <div className={ParticipantsSectionStyles.header}>
        <h2>Participants</h2>
      </div>
      <AddParticipant />
      <SearchParticipant />
      <p>participantList</p>
    </div>
  );
};

export default ParticipantsSection;
