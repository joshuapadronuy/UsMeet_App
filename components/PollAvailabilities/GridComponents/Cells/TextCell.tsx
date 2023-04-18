import { TEXT_CELL_TYPE } from "../../../../enum/text-cell";
import TextCellStyles from "../../../../styles/TextCell.module.css";

interface IProps {
  text: string;
  type: string;
}

const TextCell = ({ text, type }: IProps) => {
  return <div className={TextCellStyles.rootContainer}>{text}</div>;
};

export default TextCell;
