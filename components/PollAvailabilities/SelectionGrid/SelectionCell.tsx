import { useSelector } from "react-redux";

import { StyledGridItem } from "../../../styles/styled-components/GridStyles.styled";
import { ITimeItem } from "../../../types/TimeItem";
import { SELECTION_CELL_TYPES } from "../../../enum/selection-cell";
import { useState } from "react";
import { IReduxState } from "../../../types/ReduxState";

interface IProps {
  item: ITimeItem | string;
  type: string;
}

const decideDisplay = (item: ITimeItem | string, type: string) => {
  switch (type) {
    case SELECTION_CELL_TYPES.TEXT:
      return item as string;
    case SELECTION_CELL_TYPES.TIMESLOT:
      return (item as ITimeItem).time;
    default:
      throw new Error("invalid cell selection type");
  }
};

const SelectionCell = ({ item, type }: IProps) => {
  const display = decideDisplay(item, type);
  const [isSelected, setIsSelected] = useState(false);

  const isMouseDown = useSelector(
    (state: IReduxState) => state.mouseDown.isMouseDown
  );

  const toggleSelectedHandler = () => {
    if (isMouseDown) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <StyledGridItem isSelected={isSelected}>
      <div onMouseEnter={() => toggleSelectedHandler()}>{display}</div>
    </StyledGridItem>
  );
};

export default SelectionCell;
