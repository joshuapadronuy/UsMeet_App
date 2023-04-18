import React from "react";
import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import TextCell from "../GridComponents/Cells/TextCell";
import { DAY_TIME_LABEL_LIST } from "../../../constants/day-time-label-list";

const WeeklyGridTimeLabels = () => {
  return (
    <StyledGridContainer columnsTemplate={"repeat(1, 1fr)"}>
      <div />
      {DAY_TIME_LABEL_LIST.map((day) => (
        <TextCell text={day} />
      ))}
    </StyledGridContainer>
  );
};

export default WeeklyGridTimeLabels;
