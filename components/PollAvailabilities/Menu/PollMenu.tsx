import { MENU } from "../../../constants/menu";
import MainMenu from "./MainMenu/MainMenu";
import PollMenuStyles from "../../../styles/PollMenu.module.css";

const PollMenu = () => {
  return (
    <div className={PollMenuStyles.rootContainer}>
      <div className={PollMenuStyles.inner}>
        <MainMenu menu={MENU} />
      </div>
    </div>
  );
};

export default PollMenu;
