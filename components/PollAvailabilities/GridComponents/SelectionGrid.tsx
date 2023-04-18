import { v4 as UUIDv4 } from "uuid";

import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import { ITimeItem } from "../../../types/TimeItem";
import SelectionCell from "./Cells/SelectionCell";

interface IProps {
  columns: number;
  list: ITimeItem[];
}

const SelectionGrid = ({ columns, list }: IProps) => {
  return (
    <StyledGridContainer columnsTemplate={`repeat(${columns}, 1fr)`}>
      {list.map((item, i) => {
        return <SelectionCell key={UUIDv4()} timeItem={item} />;
      })}
    </StyledGridContainer>
  );
};

export default SelectionGrid;
