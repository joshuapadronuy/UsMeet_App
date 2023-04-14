import ShareLink from "../../../components/PollAvailabilities/ShareLink"
import PageBanner from "../../../components/UI/PageBanner"
import PollDailyStyles from "../../../styles/PollDaily.module.css";


const PollDaily = () => {
  return (
    <div className={PollDailyStyles.rootContainer}>
      {/* top section with link */}
      <section className={PollDailyStyles.banner}>
        <PageBanner.BannerImage size="small" imageSrc={'/josephine-bredehoft-cork-board.jpg'} alt={'people collaborating'}>
            <PageBanner.BannerContent>
              <ShareLink link={'testlink'} />
            </PageBanner.BannerContent>
        </PageBanner.BannerImage>
      </section>
      {/* poll section */}
      <section>
        
      </section>
    </div>
  )
}

export default PollDaily