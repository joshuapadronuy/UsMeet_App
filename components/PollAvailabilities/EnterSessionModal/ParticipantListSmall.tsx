import { useDispatch, useSelector } from "react-redux";

import { IParticipant, IReduxState } from "../../../types/ReduxState";
import { setSearchInput } from "../../../store/slices/participants-slice";
import TextField from "../../UI/TextField";
import ParticipantItemView from "./ParticipantItemView";
import ParticipantsListStyles from "../../../styles/ParticipantsListSmall.module.css";

const ParticipantsListSmall = () => {
  const dispatch = useDispatch();
  const { participantsList, searchInput } = useSelector(
    (state: IReduxState) => state.participants
  );

  const filteredParticipants = participantsList.filter((participant) =>
    participant.name.includes(searchInput)
  );

  const searchFieldHandler = (event) => {
    const searchWord = event.target.value;
    dispatch(setSearchInput({ searchInput: searchWord }));
  };

  return (
    <div>
      <TextField.Input
        placeholder="Search Participant..."
        value={searchInput}
        onChange={searchFieldHandler}
      />
      <div>
        {filteredParticipants.length > 0 ? (
          <div className={ParticipantsListStyles.inner}>
            {filteredParticipants.map((participant: IParticipant) => (
              <ParticipantItemView participant={participant} />
            ))}
          </div>
        ) : (
          <div className={ParticipantsListStyles.fallback}>
            <p>No Participants</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantsListSmall;
