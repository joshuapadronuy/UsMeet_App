import Participant from "./Participant";
import ParticipantsListStyles from "../../../styles/ParticipantsList.module.css";

const MOCK_PARTICIPANTS = [
  "Joshua",
  "Ron",
  "Sewart",
  "Hansel",
  "Conrad",
  "Ray",
];

const ParticipantsList = () => {
  return (
    <div className={ParticipantsListStyles.rootContainer}>
      <div className={ParticipantsListStyles.inner}>
        {MOCK_PARTICIPANTS.map((participant) => (
          <Participant name={participant} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
