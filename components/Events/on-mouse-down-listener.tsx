import { useDispatch } from "react-redux";

import {
  setMouseDownTrue,
  setMouseDownFalse,
} from "../../store/slices/mouse-down-slice";
import OnMouseDownListenerStyles from "../../styles/OnMouseDownListener.module.css";

const OnMouseDownListener = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      onMouseDown={() => dispatch(setMouseDownTrue())}
      onMouseUp={() => dispatch(setMouseDownFalse())}
      className={OnMouseDownListenerStyles.rootContainer}
    >
      {children}
    </div>
  );
};

export default OnMouseDownListener;
