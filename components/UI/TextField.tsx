import { ChangeEventHandler } from "react";

import TextFieldStyles from "../../styles/TextField.module.css";
import FieldErrorStyles from "../../styles/FieldErrorStyles.module.css";

interface IInputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface IErrorProps {
  children: JSX.Element;
  message: string;
  hasError: boolean;
}

const Input = ({ placeholder, value, onChange }: IInputProps) => {
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

const Error = ({ children, message, hasError }: IErrorProps) => {
  if (!hasError) {
    return <>{children}</>;
  }

  return (
    <div>
      {children}
      <div className={FieldErrorStyles.error}>{message}</div>
    </div>
  );
};

const TextField = { Input: Input, Error: Error };

export default TextField;
