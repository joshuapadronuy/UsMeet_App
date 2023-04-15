import SelectionGridStyles from "../../../styles/styled-components/SelectionGrid.module.css";
import SelectionCell from "./SelectionCell";

const SelectionGrid = ({rows, columns}) => {

    const numberOfCells = rows * columns
    const cells = Array.from(Array(numberOfCells).keys())

  return (
    <div className={SelectionGridStyles.rootContainer}>
        <SelectionCell />
        {cells.map((item, i) => <SelectionCell key={i} />)}
    </div>
  )
}

export default SelectionGrid