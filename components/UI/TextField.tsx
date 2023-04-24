import { ChangeEventHandler } from "react";
import TextFieldStyles from "../../styles/TextField.module.css";

interface IProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextField = ({ placeholder, value, onChange }: IProps) => {
  return (
    <div className={TextFieldStyles.rootContainer}>
      <input
        className={TextFieldStyles.textField}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
