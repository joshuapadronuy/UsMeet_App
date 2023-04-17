import { v4 as UUIDv4 } from "uuid";

import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import { ITimeItem } from "../../../types/TimeItem";
import SelectionCell from "./SelectionCell";
import { SELECTION_CELL_TYPES } from "../../../enum/selection-cell";
import { useState } from "react";

interface IProps {
  columns: number;
  list: (ITimeItem | string)[];
}

const SelectionGrid = ({ columns, list }: IProps) => {
  return (
    <StyledGridContainer columns={columns}>
      {list.map((item, i) => {
        return (
          <SelectionCell
            key={UUIDv4()}
            item={item}
            type={
              i === 0
                ? SELECTION_CELL_TYPES.TEXT
                : SELECTION_CELL_TYPES.TIMESLOT
            }
          />
        );
      })}
    </StyledGridContainer>
  );
};

export default SelectionGrid;
