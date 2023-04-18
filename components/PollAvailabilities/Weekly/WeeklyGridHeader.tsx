import { DAYS_OF_WEEK } from "../../../enum/days-of-week";
import { TEXT_CELL_TYPE } from "../../../enum/text-cell";
import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import TextCell from "../GridComponents/Cells/TextCell";

const WeeklyGridHeader = () => {
  const daysOfWeekList = Object.keys(DAYS_OF_WEEK);

  return (
    <StyledGridContainer columnsTemplate={"repeat(7, 1fr)"}>
      {daysOfWeekList.map((day) => (
        <TextCell text={day} type={TEXT_CELL_TYPE.HEADER} />
      ))}
    </StyledGridContainer>
  );
};

export default WeeklyGridHeader;
