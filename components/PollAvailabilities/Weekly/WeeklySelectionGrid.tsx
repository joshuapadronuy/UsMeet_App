import React from "react";
import SelectionGrid from "../GridComponents/SelectionGrid";
import { DAYS_OF_WEEK } from "../../../enum/days-of-week";
import useDayTimeList from "../../../hooks/useDayList";
import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import OnMouseDownListener from "../../Events/on-mouse-down-listener";

const WeeklySelectionGrid = () => {
  const { state: sundayState, dispatch: sundayDispatch } = useDayTimeList(
    DAYS_OF_WEEK.SUNDAY
  );
  const { state: mondayState, dispatch: mondayDispatch } = useDayTimeList(
    DAYS_OF_WEEK.MONDAY
  );
  const { state: tuesdayState, dispatch: tuesdayDispatch } = useDayTimeList(
    DAYS_OF_WEEK.TUESDAY
  );
  const { state: wednesdayState, dispatch: wednesdayDispatch } = useDayTimeList(
    DAYS_OF_WEEK.WEDNESDAY
  );
  const { state: thursdayState, dispatch: thursdayDispatch } = useDayTimeList(
    DAYS_OF_WEEK.THURSDAY
  );
  const { state: fridayState, dispatch: fridayDispatch } = useDayTimeList(
    DAYS_OF_WEEK.FRIDAY
  );
  const { state: saturdayState, dispatch: saturdayDispatch } = useDayTimeList(
    DAYS_OF_WEEK.SATURDAY
  );

  return (
    <OnMouseDownListener>
      <StyledGridContainer columnsTemplate={"repeat(7, 1fr)"}>
        <SelectionGrid columns={1} list={sundayState.timeList} />
        <SelectionGrid columns={1} list={mondayState.timeList} />
        <SelectionGrid columns={1} list={tuesdayState.timeList} />
        <SelectionGrid columns={1} list={wednesdayState.timeList} />
        <SelectionGrid columns={1} list={thursdayState.timeList} />
        <SelectionGrid columns={1} list={fridayState.timeList} />
        <SelectionGrid columns={1} list={saturdayState.timeList} />
      </StyledGridContainer>
    </OnMouseDownListener>
  );
};

export default WeeklySelectionGrid;
