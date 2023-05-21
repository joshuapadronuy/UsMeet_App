import { useDispatch, useSelector } from "react-redux";

import { IParticipant, IReduxState } from "../../../types/ReduxState";
import { setSelectedParticipant } from "../../../store/slices/participants-slice";
import ParticipantStyles from "../../../styles/ParticipantItemView.module.css";

interface IProps {
  participant: IParticipant;
}

const ParticipantItemView = ({ participant }: IProps) => {
  const dispatch = useDispatch();
  const selectedParticipant = useSelector(
    (state: IReduxState) => state.participants.selectedParticipant
  );
  const { id, name } = participant;

  const selectParticipantHandler = () => {
    dispatch(setSelectedParticipant({ id: id }));
  };

  const isCurrentlySelected =
    selectedParticipant && selectedParticipant.id == participant.id;

  return (
    <div
      className={
        isCurrentlySelected
          ? ParticipantStyles.selected
          : ParticipantStyles.rootContainer
      }
      onClick={selectParticipantHandler}
    >
      <div className={ParticipantStyles.inner}>
        <p className={ParticipantStyles.name}>{name}</p>
      </div>
    </div>
  );
};

export default ParticipantItemView;
