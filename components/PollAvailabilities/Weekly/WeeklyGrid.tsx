import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import WeeklyGridHeader from "./WeeklyGridHeader";
import WeeklyGridTimeLabels from "./WeeklyGridTimeLabels";
import WeeklySelectionGrid from "./WeeklySelectionGrid";

const WeeklyGrid = () => {
  return (
    <StyledGridContainer columnsTemplate={"1fr 9fr"}>
      <div />
      <WeeklyGridHeader />
      <WeeklyGridTimeLabels />
      <WeeklySelectionGrid />
    </StyledGridContainer>
  );
};

export default WeeklyGrid;
