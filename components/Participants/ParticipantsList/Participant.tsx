import React from "react";
import UserCircle from "../../../public/svgs/UserCircle";
import ParticipantStyles from "../../../styles/Participant.module.css";
import { StyledSvgContainer } from "../../../styles/styled-components/SvgContainerStyles.styled";
import { SVG_SIZE } from "../../../enum/svg-size";
import XMark from "../../../public/svgs/XMark";
import { IParticipant } from "../../../types/ReduxState";
import { removeParticipant } from "../../../store/slices/participants-slice";
import { useDispatch } from "react-redux";

interface IProps {
  participant: IParticipant;
}

const Participant = ({ participant }: IProps) => {
  const dispatch = useDispatch();
  const { id, name } = participant;

  const removeParticipantHandler = () => {
    dispatch(removeParticipant({ id: id }));
  };

  return (
    <div className={ParticipantStyles.rootContainer}>
      <div className={ParticipantStyles.rootContainer}>
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
