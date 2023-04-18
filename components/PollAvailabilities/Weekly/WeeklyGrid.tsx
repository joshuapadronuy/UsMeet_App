import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import WeeklyGridHeader from "./WeeklyGridHeader";
import WeeklyGridTimeLabels from "./WeeklyGridTimeLabels";
import WeeklySelectionGrid from "./WeeklySelectionGrid";

const WeeklyGrid = () => {
  return (
    <StyledGridContainer columnsTemplate={"1fr 20fr"}>
      <WeeklyGridHeader />
      <WeeklyGridTimeLabels />
      <WeeklySelectionGrid />
      <div>Test</div>
    </StyledGridContainer>
  );
};

export default WeeklyGrid;
