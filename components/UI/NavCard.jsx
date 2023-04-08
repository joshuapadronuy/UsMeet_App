import Link from "next/link";
import CardStyles from "../../styles/NavCard.module.css";
import ArrowRight from "../../public/svgs/ArrowRight";
import SvgContainer from "./SvgContainer";

const NavCard = ({ children, link }) => {
  return (
    <div className={CardStyles.container}>
      <div className={CardStyles.content}>
        {children}
      </div>
      <Link href={link}>
        <SvgContainer>
          <ArrowRight />
        </SvgContainer>
      </Link>
    </div>
  )
}

export default NavCard