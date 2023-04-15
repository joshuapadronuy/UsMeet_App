import { addMinutes, format, startOfDay } from "date-fns";

//function used to calculate the time list array for the constant DAY_TIME_LIST

const getDayTimeList = () => {
  let date = startOfDay(new Date());
  const dayTimeList = [];
  let time = format(date, "HH:mm");
  dayTimeList.push({ time, isSelected: false });

  for (let i = 0; i < 48; i++) {
    date = addMinutes(date, 30);
    time = format(date, "HH:mm");
    dayTimeList.push({ time, isSelected: false });
  }

  return dayTimeList;
  //console.log(dayTimeList, JSON.stringify(dayTimeList));
};

export default getDayTimeList;
