import { useRouter } from "next/router";
import ShareLink from "../../../components/PollAvailabilities/ShareLink"
import PageBanner from "../../../components/UI/PageBanner"
import PollDailyStyles from "../../../styles/PollDaily.module.css";


const PollDaily = () => {
  const router = useRouter()
  const { pollId } = router.query

  return (
    <div className={PollDailyStyles.rootContainer}>
      {/* top section with link */}
      <section className={PollDailyStyles.banner}>
        <PageBanner.BannerImage size="small" imageSrc={'/josephine-bredehoft-cork-board.jpg'} alt={'people collaborating'}>
            <PageBanner.BannerContent>
              <ShareLink link={`http://localhost:3000/poll-availabilities/daily/${pollId}`} />
            </PageBanner.BannerContent>
        </PageBanner.BannerImage>
      </section>
      {/* poll section */}
      <section>
        in contruction
      </section>
    </div>
  )
}

export default PollDaily