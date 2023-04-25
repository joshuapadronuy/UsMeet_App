import { IMenu } from "../../../../types/Menu";
import MainMenuItem from "./MainMenuItem";
import MainMenuStyles from "../../../../styles/MainMenu.module.css";

interface IProps {
  menu: IMenu[];
}

const MainMenu = ({ menu }: IProps) => {
  return (
    <div className={MainMenuStyles.rootContainer}>
      {menu.map((menuItem) => (
        <MainMenuItem menuItem={menuItem} />
      ))}
    </div>
  );
};

export default MainMenu;
