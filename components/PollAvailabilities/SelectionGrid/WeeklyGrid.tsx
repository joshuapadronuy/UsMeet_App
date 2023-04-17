import React from "react";
import SelectionGrid from "./SelectionGrid";
import { DAYS_OF_WEEK } from "../../../enum/days-of-week";
import useDayTimeList from "../../../hooks/useDayList";
import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import { ITimeItem } from "../../../types/TimeItem";
import OnMouseDownListener from "../../Events/on-mouse-down-listener";

const WeeklyGrid = () => {
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

  const sundayGridList = [DAYS_OF_WEEK.SUNDAY, ...sundayState.timeList];
  const mondayGridList = [DAYS_OF_WEEK.MONDAY, ...mondayState.timeList];
  const tuesdayGridList = [DAYS_OF_WEEK.TUESDAY, ...tuesdayState.timeList];
  const wednesdayGridList = [
    DAYS_OF_WEEK.WEDNESDAY,
    ...wednesdayState.timeList,
  ];
  const thursdayGridList = [DAYS_OF_WEEK.THURSDAY, ...thursdayState.timeList];
  const fridayGridList = [DAYS_OF_WEEK.FRIDAY, ...fridayState.timeList];
  const saturdayGridList = [DAYS_OF_WEEK.SATURDAY, ...saturdayState.timeList];

  return (
    <OnMouseDownListener>
      <StyledGridContainer columns={7}>
        <SelectionGrid columns={1} list={sundayGridList} />
        <SelectionGrid columns={1} list={mondayGridList} />
        <SelectionGrid columns={1} list={tuesdayGridList} />
        <SelectionGrid columns={1} list={wednesdayGridList} />
        <SelectionGrid columns={1} list={thursdayGridList} />
        <SelectionGrid columns={1} list={fridayGridList} />
        <SelectionGrid columns={1} list={saturdayGridList} />
      </StyledGridContainer>
    </OnMouseDownListener>
  );
};

export default WeeklyGrid;
