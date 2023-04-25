import { toPascalCase } from "../../../../util/camelize";
import { StyledMenuItemContainer } from "../../../../styles/styled-components/MenuItemStyles.styled";

const MainMenuItem = ({ item }) => {
  const test = toPascalCase(item);
  return (
    <StyledMenuItemContainer fontSize={"larger"}>
      {test}
    </StyledMenuItemContainer>
  );
};

export default MainMenuItem;
