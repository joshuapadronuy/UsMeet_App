import styled from "styled-components"

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #2196F3;
  padding: 10px;
`;

export const StyledGridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;