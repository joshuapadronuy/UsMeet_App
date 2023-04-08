import TitleBox from "../components/UI/TitleBox"
import PollAvailabilityStyle from '../styles/PollAvailabilities.module.css'


const PollAvailability = () => {
  return (
    <div className={PollAvailabilityStyle.container}>
      <TitleBox>Poll Availabilities</TitleBox>
      {/* choose availability */}
      <section>
        <p>Choose which availability to poll</p>
        <p>Specific Day</p>
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </section>
    </div>
  )
}

export default PollAvailability