import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import WeeklyGridHeader from "./WeeklyGridHeader";
import WeeklyGridTimeLabels from "./WeeklyGridTimeLabels";
import WeeklySelectionGrid from "./WeeklySelectionGrid";
import WeeklyGridStyles from "../../../styles/WeeklyGridStyles.module.css";

const WeeklyGrid = () => {
  return (
    <div className={WeeklyGridStyles.rootContainer}>
      <StyledGridContainer columnsTemplate={"1fr 20fr"}>
        <div>
          <WeeklyGridHeader />
          <WeeklySelectionGrid />
        </div>
        <WeeklyGridTimeLabels />
      </StyledGridContainer>
    </div>
  );
};

export default WeeklyGrid;
