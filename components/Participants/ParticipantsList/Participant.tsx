import { useDispatch, useSelector } from "react-redux";

import UserCircle from "../../../public/svgs/UserCircle";
import { SVG_SIZE } from "../../../enum/svg-size";
import XMark from "../../../public/svgs/XMark";
import { IParticipant, IReduxState } from "../../../types/ReduxState";
import {
  removeParticipant,
  setSelectedParticipant,
} from "../../../store/slices/participants-slice";
import ParticipantStyles from "../../../styles/Participant.module.css";
import { StyledSvgContainer } from "../../../styles/styled-components/SvgContainerStyles.styled";

interface IProps {
  participant: IParticipant;
}

const Participant = ({ participant }: IProps) => {
  const dispatch = useDispatch();
  const selectedParticipant = useSelector(
    (state: IReduxState) => state.participants.selectedParticipant
  );
  const { id, name } = participant;

  const selectParticipantHandler = () => {
    dispatch(setSelectedParticipant({ id: id }));
  };

  const removeParticipantHandler = () => {
    dispatch(removeParticipant({ id: id }));
  };

  const isCurrentlySelected =
    selectedParticipant && selectedParticipant.id == participant.id;

  console.log({ isCurrentlySelected });

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
        <StyledSvgContainer size={SVG_SIZE.SMALL}>
          <UserCircle />
        </StyledSvgContainer>
        <p className={ParticipantStyles.name}>{name}</p>
      </div>
      <StyledSvgContainer
        size={SVG_SIZE.SMALL}
        isClickable={true}
        onClick={removeParticipantHandler}
      >
        <XMark />
      </StyledSvgContainer>
    </div>
  );
};

export default Participant;
