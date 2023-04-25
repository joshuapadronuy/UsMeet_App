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
  const selectedSubMenu = useSelector(
    (state: IReduxState) => state.menu.selectedSubMenu
  );
  const menuItemPascal = toPascalCase(subMenuItem);

  const onSelectMenu = () => {
    dispatch(setSelectedSubMenu({ menuSelected: subMenuItem }));
  };

  const isCurrentlySelected = () => {
    return selectedSubMenu === subMenuItem;
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
