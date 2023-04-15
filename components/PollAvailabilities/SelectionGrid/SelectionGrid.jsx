import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import getDayTimeList from "../../../util/dates/getDayTimeList";
import SelectionCell from "./SelectionCell";

const SelectionGrid = ({rows, columns}) => {

    const numberOfCells = rows * columns
    const cells = Array.from(Array(numberOfCells).keys())

    const test = getDayTimeList()

  return (
    <StyledGridContainer>
        <SelectionCell />
        {cells.map((item, i) => <SelectionCell key={i} />)}
    </StyledGridContainer>
  )
}

export default SelectionGrid