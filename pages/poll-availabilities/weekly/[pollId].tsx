import { useRouter } from "next/router";

import ShareLink from "../../../components/PollAvailabilities/ShareLink";
import PageBanner from "../../../components/UI/PageBanner";
import PollWeeklyStyles from "../../../styles/PollWeekly.module.css";
import WeeklyGrid from "../../../components/PollAvailabilities/Weekly/WeeklyGrid";
import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import ParticipantsSection from "../../../components/Participants/ParticipantsSection";

const PollAvailability = () => {
  const router = useRouter();
  const { pollId } = router.query;

  const linkToShare = `http://localhost:3000/poll-availabilities/weekly/${pollId}`;

  return (
    <div className={PollWeeklyStyles.rootContainer}>
      {/* top section with link */}
      <section className={PollWeeklyStyles.banner}>
        <PageBanner.BannerImage
          size="small"
          imageSrc={"/josephine-bredehoft-cork-board.jpg"}
          alt={"people collaborating"}
        >
          <PageBanner.BannerContent>
            <ShareLink link={linkToShare} />
          </PageBanner.BannerContent>
        </PageBanner.BannerImage>
      </section>
      {/* poll section */}
      <section className={PollWeeklyStyles.pollSection}>
        <StyledGridContainer columnsTemplate={"4fr 1fr"}>
          <WeeklyGrid />
          <ParticipantsSection />
        </StyledGridContainer>
      </section>
    </div>
  );
};

export default PollAvailability;
