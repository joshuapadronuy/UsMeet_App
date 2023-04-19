import React, { MouseEventHandler } from "react";
import SvgContainer from "../../UI/SvgContainer";
import UserPlus from "../../../public/svgs/UserPlus";
import AddParticipantStyles from "../../../styles/AddParticipant.module.css";

interface IProps {
  onClickHandler: MouseEventHandler<HTMLDivElement>;
}

const AddParticipant = ({ onClickHandler }: IProps) => {
  return (
    <div
      className={AddParticipantStyles.rootContainer}
      onClick={onClickHandler}
    >
      <SvgContainer>
        <UserPlus />
      </SvgContainer>
    </div>
  );
};

export default AddParticipant;
