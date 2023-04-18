import { useSelector } from "react-redux";
import { useState } from "react";

import { StyledGridItem } from "../../../../styles/styled-components/GridStyles.styled";
import { ITimeItem } from "../../../../types/TimeItem";
import { IReduxState } from "../../../../types/ReduxState";

interface IProps {
  timeItem: ITimeItem;
}

const SelectionCell = ({ timeItem }: IProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const isMouseDown = useSelector(
    (state: IReduxState) => state.mouseDown.isMouseDown
  );

  const toggleSelectedHandler = (event) => {
    if (event.type == "mouseenter") {
      if (isMouseDown) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    } else if (event.type == "click") {
      setIsSelected((currIsSelected) => !currIsSelected);
    }
  };

  return (
    <StyledGridItem isSelected={isSelected}>
      <div
        onMouseEnter={(e) => toggleSelectedHandler(e)}
        onClick={(e) => toggleSelectedHandler(e)}
      >
        {timeItem.time}
      </div>
    </StyledGridItem>
  );
};

export default SelectionCell;
