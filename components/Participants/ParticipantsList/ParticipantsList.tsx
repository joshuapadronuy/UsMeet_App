import Participant from "./Participant";
import ParticipantsListStyles from "../../../styles/ParticipantsList.module.css";
import { useSelector } from "react-redux";
import { IReduxState } from "../../../types/ReduxState";

const ParticipantsList = () => {
  const { participantsList, searchInput } = useSelector(
    (state: IReduxState) => state.participants
  );

  const filteredParticipants = participantsList.filter((participant) =>
    participant.includes(searchInput)
  );

  return (
    <div className={ParticipantsListStyles.rootContainer}>
      <div className={ParticipantsListStyles.inner}>
        {filteredParticipants.map((participant) => (
          <Participant name={participant} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
