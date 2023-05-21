import { MouseEventHandler } from "react";

import ButtonStyles from "../../styles/Button.module.css";

interface IProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: IProps) => {
  return (
    <button className={ButtonStyles.rootContainer} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
