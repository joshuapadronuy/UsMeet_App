import { useDispatch, useSelector } from "react-redux";

import { toPascalCase } from "../../../../util/camelize";
import { StyledMenuItemContainer } from "../../../../styles/styled-components/MenuItemStyles.styled";
import { setSelectedMainMenu } from "../../../../store/slices/menu-slice";
import { IReduxState } from "../../../../types/ReduxState";
import { IMenu } from "../../../../types/Menu";

interface IProps {
  menuItem: IMenu;
}

const MainMenuItem = ({ menuItem }: IProps) => {
  const dispatch = useDispatch();
  const selectedMainMenu = useSelector(
    (state: IReduxState) => state.menu.selectedMainMenu
  );
  const menuItemPascal = toPascalCase(menuItem.NAME);

  const onSelectMenu = () => {
    dispatch(setSelectedMainMenu({ mainMenuSelected: menuItem.NAME }));
  };

  const isCurrentlySelected = () => {
    return selectedMainMenu === menuItem.NAME;
  };

  return (
    <StyledMenuItemContainer
      isSelected={isCurrentlySelected()}
      fontSize={"larger"}
      onClick={onSelectMenu}
    >
      {menuItemPascal}
    </StyledMenuItemContainer>
  );
};

export default MainMenuItem;
