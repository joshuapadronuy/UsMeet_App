import TimeLabelsStyles from "../../../styles/WeeklyGridTimeLabels.module.css";
import { DAY_TIME_LABEL_LIST } from "../../../constants/day-time-label-list";

const WeeklyGridTimeLabels = () => {
  return (
    <div className={TimeLabelsStyles.rootContainer}>
      {DAY_TIME_LABEL_LIST.map((day) => (
        <div className={TimeLabelsStyles.labelCell}>{day}</div>
      ))}
    </div>
  );
};

export default WeeklyGridTimeLabels;
