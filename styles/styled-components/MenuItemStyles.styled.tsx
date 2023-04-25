import styled from "styled-components";

export const StyledMenuItemContainer = styled.div`
  padding: 10px;
  margin: 10px;
  color: white;
  background-color: var(--accent300);
  box-shadow: 5px 10px var(--dark100);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};

  &:hover {
    background-color: var(--accent400);
  }
`;
