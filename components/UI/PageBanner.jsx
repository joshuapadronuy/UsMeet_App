import Image from "next/image";
import PageBannerStyles from "../../styles/PageBanner.module.css";


const BannerImage = ({ children, size, imageSrc, alt }) => {
  return (
    <div className={size == 'small' ? PageBannerStyles.bannerSmall : PageBannerStyles.bannerMedium}>
      <div className={PageBannerStyles.imageContainer}>
          <Image
          src={imageSrc}
          alt={alt}
          fill= "absolute"
          objectFit="cover"
          />
      </div>
      {children}
    </div>
  )
}

const BannerContent = ({children}) => {
  return (
    <div className={PageBannerStyles.content}>
      {children}
    </div>
  )
}

const PageBanner = { BannerImage, BannerContent }

export default PageBanner