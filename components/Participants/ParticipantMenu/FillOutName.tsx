import FillOutNameStyles from "../../../styles/FillOutName.module.css";
import Button from "../../UI/Button";
import TextField from "../../UI/TextField";

const FillOutName = () => {
  return (
    <div>
      <div className={FillOutNameStyles.enterName}>
        <p>To add new participant, please enter your name</p>
        <TextField placeholder="Enter Participant Name..." />
      </div>
      <Button>Add Participant</Button>
    </div>
  );
};

export default FillOutName;
