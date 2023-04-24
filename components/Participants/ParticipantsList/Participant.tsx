import React from "react";
import UserCircle from "../../../public/svgs/UserCircle";
import ParticipantStyles from "../../../styles/Participant.module.css";
import { StyledSvgContainer } from "../../../styles/styled-components/SvgContainerStyles.styled";
import { SVG_SIZE } from "../../../enum/svg-size";
import XMark from "../../../public/svgs/XMark";

const Participant = ({ name }) => {
  return (
    <div className={ParticipantStyles.rootContainer}>
      <div className={ParticipantStyles.rootContainer}>
        <StyledSvgContainer size={SVG_SIZE.SMALL}>
          <UserCircle />
        </StyledSvgContainer>
        <p className={ParticipantStyles.name}>{name}</p>
      </div>
      <StyledSvgContainer size={SVG_SIZE.SMALL} isClickable={true}>
        <XMark />
      </StyledSvgContainer>
    </div>
  );
};

export default Participant;
