import Participant from "./Participant";
import ParticipantsListStyles from "../../../styles/ParticipantsList.module.css";
import { useSelector } from "react-redux";
import { IParticipant, IReduxState } from "../../../types/ReduxState";

const ParticipantsList = () => {
  const { participantsList, searchInput } = useSelector(
    (state: IReduxState) => state.participants
  );

  const filteredParticipants = participantsList.filter((participant) =>
    participant.name.includes(searchInput)
  );

  let participantsOutput = (
    <div className={ParticipantsListStyles.fallback}>
      <p>No Participants</p>
    </div>
  );

  if (filteredParticipants.length > 0) {
    participantsOutput = (
      <div className={ParticipantsListStyles.inner}>
        {filteredParticipants.map((participant: IParticipant) => (
          <Participant participant={participant} />
        ))}
      </div>
    );
  }

  return (
    <div className={ParticipantsListStyles.rootContainer}>
      {participantsOutput}
    </div>
  );
};

export default ParticipantsList;
