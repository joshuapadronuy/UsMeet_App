import ButtonStyles from "../../styles/Button.module.css";

const Button = ({ children }) => {
  return <button className={ButtonStyles.rootContainer}>{children}</button>;
};

export default Button;
