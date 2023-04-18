import { StyledGridItem } from "../../../../styles/styled-components/GridStyles.styled";

interface IProps {
  text: string;
}

const TextCell = ({ text }: IProps) => {
  return <StyledGridItem>{text}</StyledGridItem>;
};

export default TextCell;
