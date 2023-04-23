import React, { MouseEventHandler } from "react";
import UserPlus from "../../../public/svgs/UserPlus";
import AddParticipantStyles from "../../../styles/AddParticipant.module.css";
import { StyledSvgContainer } from "../../../styles/styled-components/SvgContainerStyles.styled";

interface IProps {
  onClickHandler: MouseEventHandler<HTMLDivElement>;
}

const AddParticipant = ({ onClickHandler }: IProps) => {
  return (
    <div
      className={AddParticipantStyles.rootContainer}
      onClick={onClickHandler}
    >
      <StyledSvgContainer>
        <UserPlus />
      </StyledSvgContainer>
    </div>
  );
};

export default AddParticipant;
