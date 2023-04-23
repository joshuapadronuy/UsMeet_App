import React from "react";
import UserCircle from "../../../public/svgs/UserCircle";
import ParticipantStyles from "../../../styles/Participant.module.css";
import { StyledSvgContainer } from "../../../styles/styled-components/SvgContainerStyles.styled";
import { SVG_SIZE } from "../../../enum/svg-size";

const Participant = ({ name }) => {
  return (
    <div className={ParticipantStyles.rootContainer}>
      <StyledSvgContainer size={SVG_SIZE.SMALL}>
        <UserCircle />
      </StyledSvgContainer>
      <p>{name}</p>
    </div>
  );
};

export default Participant;
