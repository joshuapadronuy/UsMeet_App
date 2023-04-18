import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columnsTemplate }) => columnsTemplate};
  grid-template-rows: ${({ rowsTemplate }) => rowsTemplate};
`;

export const StyledGridItem = styled.div`
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--accent100)" : "white"};
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-align: center;
  cursor: pointer;
  user-select: none;
`;
