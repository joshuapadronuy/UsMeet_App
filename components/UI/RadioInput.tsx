import { MouseEventHandler } from "react";

import RadioStyles from "../../styles/RadioInput.module.css";

interface IProps {
  id: string;
  groupName: string;
  onClickHandler: MouseEventHandler<HTMLInputElement>;
  isSelected: boolean;
}

const RadioInput = ({ id, groupName, onClickHandler, isSelected }: IProps) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        name={groupName}
        value={id}
        onClick={onClickHandler}
        className={RadioStyles.radio}
      />
      <label
        htmlFor={id}
        className={`${RadioStyles.label} ${
          isSelected && RadioStyles.isSelected
        }`}
      >
        {id}
      </label>
    </>
  );
};

export default RadioInput;
