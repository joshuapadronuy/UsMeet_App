import { IMenu } from "../../../../types/Menu";
import SubMenuItem from "./SubMenuItem";
import SubMenuStyles from "../../../../styles/SubMenu.module.css";

interface IProps {
  subMenu: string[];
}

const SubMenu = ({ subMenu }: IProps) => {
  return (
    <div className={SubMenuStyles.rootContainer}>
      {subMenu.map((subMenuItem) => (
        <SubMenuItem subMenuItem={subMenuItem} />
      ))}
    </div>
  );
};

export default SubMenu;
