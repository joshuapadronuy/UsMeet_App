import TextFieldStyles from "../../styles/TextField.module.css";

interface IProps {
  placeholder: string;
}

const TextField = ({ placeholder }: IProps) => {
  return (
    <div className={TextFieldStyles.rootContainer}>
      <input
        className={TextFieldStyles.textField}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
