import TitleBox from "../../components/UI/TitleBox";
import PollAvailabilityStyle from "../../styles/PollAvailabilities.module.css";
import { AVAILABILITY_TYPE } from "../../enum/availability-type";
import NavCard from "../../components/UI/NavCard";
import { camelize } from "../../util/camelize";

const PollAvailability = () => {
  //post a poll session

  const availabilityLinks = [
    {
      name: AVAILABILITY_TYPE.SPECIFIC,
      link: "/poll-availabilities/specific-day/1",
    },
    { name: AVAILABILITY_TYPE.DAILY, link: "/poll-availabilities/daily/1" },
    { name: AVAILABILITY_TYPE.WEEKLY, link: "/poll-availabilities/weekly/1" },
    { name: AVAILABILITY_TYPE.MONTHLY, link: "/poll-availabilities/monthly/1" },
  ];

  return (
    <div className={PollAvailabilityStyle.container}>
      <TitleBox>Poll Availabilities</TitleBox>
      {/* choose availability to poll */}
      <section className={PollAvailabilityStyle.pollSection}>
        <h2>Choose which availability you want to poll</h2>
        <div className={PollAvailabilityStyle.selectionGrid}>
          {availabilityLinks.map((availLink) => {
            return (
              <div
                className={PollAvailabilityStyle.gridItem}
                key={availLink.name}
              >
                <NavCard link={availLink.link}>
                  <h3>{camelize(availLink.name)}</h3>
                </NavCard>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PollAvailability;
