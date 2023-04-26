import Link from "next/link";
import CardStyles from "../../styles/NavCard.module.css";
import ArrowRight from "../../public/svgs/ArrowRight";
import { StyledSvgContainer } from "../../styles/styled-components/SvgContainerStyles.styled";

const NavCard = ({ children, link }) => {
  return (
    <div className={CardStyles.container}>
      <div className={CardStyles.content}>{children}</div>
      <Link href={link}>
        <StyledSvgContainer isClickable={true}>
          <ArrowRight />
        </StyledSvgContainer>
      </Link>
    </div>
  );
};

export default NavCard;
