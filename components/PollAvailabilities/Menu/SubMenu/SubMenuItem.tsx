import { useDispatch, useSelector } from "react-redux";

import { toPascalCase } from "../../../../util/camelize";
import { setSelectedSubMenu } from "../../../../store/slices/menu-slice";
import { IReduxState } from "../../../../types/ReduxState";
import { StyledSubMenuItemContainer } from "../../../../styles/styled-components/SubMenuItemStyles.styled";

interface IProps {
  subMenuItem: string;
}

const SubMenuItem = ({ subMenuItem }: IProps) => {
  const dispatch = useDispatch();
  const { menuItems, selectedMainMenu } = useSelector(
    (state: IReduxState) => state.menu
  );
  const menuItemPascal = toPascalCase(subMenuItem);
  const mainMenuItem = menuItems.find(
    (menuItem) => menuItem.NAME === selectedMainMenu
  );

  const onSelectMenu = () => {
    dispatch(
      setSelectedSubMenu({
        subMenuSelected: subMenuItem,
      })
    );
    console.log({ menuItems });
  };

  const isCurrentlySelected = () => {
    return mainMenuItem.selectedSubMenu === subMenuItem;
  };

  return (
    <StyledSubMenuItemContainer
      isSelected={isCurrentlySelected()}
      fontSize={"medium"}
      onClick={onSelectMenu}
    >
      {menuItemPascal}
    </StyledSubMenuItemContainer>
  );
};

export default SubMenuItem;
