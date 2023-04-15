import React from "react";
import SvgStyles from "../../styles/SvgContainer.module.css";

interface IProps {
  children: JSX.Element;
  isClickable?: Boolean;
}

const SvgContainer = ({ children, isClickable }: IProps) => {
  return (
    <div className={isClickable ? SvgStyles.clickable : SvgStyles.container}>
      {children}
    </div>
  );
};

export default SvgContainer;
