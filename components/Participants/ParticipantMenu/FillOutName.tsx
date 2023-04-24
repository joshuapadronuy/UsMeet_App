import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FillOutNameStyles from "../../../styles/FillOutName.module.css";
import Button from "../../UI/Button";
import TextField from "../../UI/TextField";
import { addParticipant } from "../../../store/slices/participants-slice";
import { IReduxState } from "../../../types/ReduxState";
import FieldError from "../../UI/FieldError";

interface IProps {
  setShowAddParticipant: Dispatch<SetStateAction<boolean>>;
}

const FillOutName = ({ setShowAddParticipant }) => {
  const dispatch = useDispatch();
  const participantsList = useSelector(
    (state: IReduxState) => state.participants.participantsList
  );
  const [nameToAdd, setNameToAdd] = useState("");
  const [errorNameExists, setErrorNameExists] = useState(false);

  const nameAlreadyExists = (name) => {
    const foundName = participantsList.find(
      (participant) => participant.name == name
    );
    return Boolean(foundName);
  };

  const onChangeNameToAddHandler = (event) => {
    const nameInput = event.target.value;
    setNameToAdd(nameInput);
  };

  const onAddParticipantHandler = () => {
    setErrorNameExists(nameAlreadyExists(nameToAdd));
    if (!nameAlreadyExists(nameToAdd)) {
      dispatch(addParticipant({ participantName: nameToAdd }));
      setNameToAdd("");
      setShowAddParticipant(false);
    }
  };

  //TODO ADD ERROR HANDLER FOR BLANK NAME
  //TODO ADD ERROR HANDLER FOR EXISTING NAME

  return (
    <div>
      <div className={FillOutNameStyles.enterName}>
        <p>To add new participant, please enter your name</p>
        <TextField.Error
          message="This name already exists"
          hasError={errorNameExists}
        >
          <TextField.Input
            placeholder="Enter Participant Name..."
            value={nameToAdd}
            onChange={onChangeNameToAddHandler}
          />
        </TextField.Error>
      </div>
      <Button onClick={onAddParticipantHandler}>Add Participant</Button>
    </div>
  );
};

export default FillOutName;
