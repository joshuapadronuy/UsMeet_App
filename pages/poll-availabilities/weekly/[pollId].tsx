import { useRouter } from "next/router";

import ShareLink from "../../../components/PollAvailabilities/ShareLink";
import PageBanner from "../../../components/UI/PageBanner";
import WeeklyGrid from "../../../components/PollAvailabilities/Weekly/WeeklyGrid";
import { StyledGridContainer } from "../../../styles/styled-components/GridStyles.styled";
import ParticipantsSection from "../../../components/Participants/ParticipantsSection";
import PollMenu from "../../../components/PollAvailabilities/Menu/PollMenu";
import PollWeeklyStyles from "../../../styles/PollWeekly.module.css";
import EnterParticipantModal from "../../../components/PollAvailabilities/EnterParticipantModal";

const PollAvailability = () => {
  const router = useRouter();
  const { pollId } = router.query;

  const linkToShare = `http://localhost:3000/poll-availabilities/weekly/${pollId}`;

  return <EnterParticipantModal />;

  return (
    <>
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
        <section>
          <StyledGridContainer
            columnsTemplate={"4fr 1fr"}
            rowsTemplate={"1fr 11fr"}
          >
            <PollMenu />
            <ParticipantsSection />
            <WeeklyGrid />
          </StyledGridContainer>
        </section>
      </div>
    </>
  );
};

export default PollAvailability;
