import { useSelector } from "react-redux";

import MainMenu from "./MainMenu/MainMenu";
import PollMenuStyles from "../../../styles/PollMenu.module.css";
import SubMenu from "./SubMenu/SubMenu";
import { IReduxState } from "../../../types/ReduxState";

const PollMenu = () => {
  const { menuItems, selectedMainMenu } = useSelector(
    (state: IReduxState) => state.menu
  );
  const subMenu = menuItems.find(
    (menuItem) => menuItem.NAME == selectedMainMenu
  );

  return (
    <div className={PollMenuStyles.rootContainer}>
      <div className={PollMenuStyles.inner}>
        <MainMenu menu={menuItems} />
        <SubMenu subMenu={subMenu.SUB_MENU} />
      </div>
    </div>
  );
};

export default PollMenu;
