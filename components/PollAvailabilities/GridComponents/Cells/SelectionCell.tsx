import { useSelector } from "react-redux";
import { useState } from "react";

import { StyledGridItem } from "../../../../styles/styled-components/GridStyles.styled";
import { ITimeItem } from "../../../../types/TimeItem";
import { IReduxState } from "../../../../types/ReduxState";
import { PLOT_AVAILABILITY_SUB } from "../../../../enum/menu";

interface IProps {
  timeItem: ITimeItem;
}

const SelectionCell = ({ timeItem }: IProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const isMouseDown = useSelector(
    (state: IReduxState) => state.mouseDown.isMouseDown
  );
  const { menuItems, selectedMainMenu } = useSelector(
    (state: IReduxState) => state.menu
  );
  const mainMenuItem = menuItems.find(
    (menuItem) => menuItem.NAME == selectedMainMenu
  );

  const mustSelectCell = (selectedSubMenu: string) => {
    switch (selectedSubMenu) {
      case PLOT_AVAILABILITY_SUB.ADD:
        return true;
      case PLOT_AVAILABILITY_SUB.REMOVE:
        return false;
      default:
        return false;
    }
  };

  const toggleSelectedHandler = (event) => {
    const mustSelect = mustSelectCell(mainMenuItem.selectedSubMenu);
    if (event.type == "mouseenter") {
      if (isMouseDown) {
        setIsSelected(mustSelect);
      }
    } else if (event.type == "mousedown") {
      setIsSelected(mustSelect);
    }
  };

  return (
    <StyledGridItem isSelected={isSelected}>
      <div
        onMouseEnter={(e) => toggleSelectedHandler(e)}
        onMouseDown={(e) => toggleSelectedHandler(e)}
      >
        {timeItem.time}
      </div>
    </StyledGridItem>
  );
};

export default SelectionCell;
