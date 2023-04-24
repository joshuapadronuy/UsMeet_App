import { DAY_TIME_LABEL_LIST } from "../../../constants/day-time-label-list";
import TimeLabelsStyles from "../../../styles/WeeklyGridTimeLabels.module.css";

const WeeklyGridTimeLabels = () => {
  return (
    <div className={TimeLabelsStyles.rootContainer}>
      <div>
        {DAY_TIME_LABEL_LIST.map((time) => (
          <div className={TimeLabelsStyles.labelCell}>{`${time} -`}</div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyGridTimeLabels;
