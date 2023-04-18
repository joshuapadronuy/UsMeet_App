import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columnsTemplate }) => columnsTemplate};
  background-color: #2196f3;
`;

export const StyledGridItem = styled.div`
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "white")};
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-align: center;
  cursor: pointer;
  user-select: none;
`;
