import { useRouter } from "next/router";
import ShareLink from "../../../components/PollAvailabilities/ShareLink";
import PageBanner from "../../../components/UI/PageBanner";
import PollWeeklyStyles from "../../../styles/PollWeekly.module.css";
import WeeklyGrid from "../../../components/PollAvailabilities/SelectionGrid/WeeklyGrid";
import useDayTimeList from "../../../hooks/useDayList";
import { DATE_TIME_LIST_ACTIONS } from "../../../enum/date-time-list-actions";

const PollAvailability = () => {
  const router = useRouter();
  const { pollId } = router.query;

  const { state, dispatch } = useDayTimeList("Monday");

  const testHandler = () => {
    dispatch({ type: DATE_TIME_LIST_ACTIONS.SET_NAME, payload: "mike" });
  };

  console.log({ state });

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
      <section>
        <WeeklyGrid />
      </section>
      <button onClick={testHandler}>test</button>
    </div>
  );
};

export default PollAvailability;
