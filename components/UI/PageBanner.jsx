import Image from "next/image";
import PageBannerStyles from "../../styles/PageBanner.module.css";


const PageBanner = ({ children, imageSrc, alt }) => {
  return (
    <div className={PageBannerStyles.banner}>
      <div className={PageBannerStyles.imageContainer}>
          <Image
          src={imageSrc}
          alt={alt}
          fill= "absolute"
          objectFit="cover"
          />
      </div>
      <div className={PageBannerStyles.content}>
        {children}
      </div>
    </div>
  )
}

export default PageBanner