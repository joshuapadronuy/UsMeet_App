import styled from "styled-components";
import { SVG_SIZE } from "../../enum/svg-size";

const determineSize = (size: string) => {
  switch (size) {
    case SVG_SIZE.SMALL:
      return "20px";
    case SVG_SIZE.MEDIUM:
      return "40px";
    default:
      return "40px";
  }
};

export const StyledSvgContainer = styled.div`
  height: ${({ size }) => determineSize(size)};
  width: ${({ size }) => determineSize(size)};
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;
