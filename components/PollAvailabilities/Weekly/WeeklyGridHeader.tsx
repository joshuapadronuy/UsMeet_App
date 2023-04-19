import { DAYS_OF_WEEK } from "../../../enum/days-of-week";
import { TEXT_CELL_TYPE } from "../../../enum/text-cell";
import TextCell from "../GridComponents/Cells/TextCell";
import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import GridHeaderStyles from "../../../styles/GridHeaderStyles.module.css";

const WeeklyGridHeader = () => {
  const daysOfWeekList = Object.keys(DAYS_OF_WEEK);

  return (
    <div className={GridHeaderStyles.rootContainer}>
      <StyledGridContainer columnsTemplate={"repeat(7, 1fr)"}>
        {daysOfWeekList.map((day) => (
          <TextCell text={day} type={TEXT_CELL_TYPE.HEADER} />
        ))}
      </StyledGridContainer>
    </div>
  );
};

export default WeeklyGridHeader;
