import { useReducer } from "react";
import { DAY_TIME_LIST } from "../constants/day-time-list";
import { DATE_TIME_LIST_ACTIONS } from "../enum/date-time-list-actions";

const dayTimeListReducer = (state, action) => {
  switch (action.type) {
    case DATE_TIME_LIST_ACTIONS.SET_NAME:
      return { ...state, dayName: action.payload };
    case DATE_TIME_LIST_ACTIONS.TOGGLE_IS_SELECTED:
      const timeItemIndex = state.timeList.findIndex(
        (timeItem) => timeItem.time === action.payload.time
      );
      state.timeList[timeItemIndex].isSelected =
        !state.timeList[timeItemIndex].isSelected;
      return { ...state, timeList: state.timeList };
    default:
      throw new Error();
  }
};

const useDayTimeList = (dayName) => {
  const initialState = {
    dayName: dayName,
    timeList: DAY_TIME_LIST,
  };

  const [state, dispatch] = useReducer(dayTimeListReducer, initialState);
  return { state, dispatch };
};

export default useDayTimeList;
