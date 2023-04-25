import styled from "styled-components";

export const StyledSubMenuItemContainer = styled.div`
  padding: 10px 20px;
  min-width: 150px;
  text-align: center;
  margin: 10px;
  color: white;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--accent100)" : "var(--accent300)"};
  box-shadow: 3px 3px var(--dark100);
  border: solid;
  border-radius: 20px;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "var(--accent100)" : "var(--accent400)"};
  }
`;
