import Image from "next/image";
import PageBannerStyles from "../../styles/PageBanner.module.css";

interface IProps {
  children: JSX.Element;
  size: string;
  imageSrc: string;
  alt: string;
}

const BannerImage = ({ children, size, imageSrc, alt }: IProps) => {
  return (
    <div
      className={
        size == "small"
          ? PageBannerStyles.bannerSmall
          : PageBannerStyles.bannerMedium
      }
    >
      <div className={PageBannerStyles.imageContainer}>
        <Image src={imageSrc} alt={alt} fill={true} objectFit="cover" />
      </div>
      {children}
    </div>
  );
};

const BannerContent = ({ children }) => {
  return <div className={PageBannerStyles.content}>{children}</div>;
};

const PageBanner = { BannerImage, BannerContent };

export default PageBanner;
