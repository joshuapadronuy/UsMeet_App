import { useState } from "react";

import TextField from "../UI/TextField";
import ModalStyles from "../../styles/EnterParticipantModal.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { IReduxState } from "../../types/ReduxState";
import { addParticipant } from "../../store/slices/participants-slice";

const EnterParticipantModal = () => {
  const dispatch = useDispatch();
  const participantsList = useSelector(
    (state: IReduxState) => state.participants.participantsList
  );
  const [errorNameExists, setErrorNameExists] = useState(false);
  const [nameToAdd, setNameToAdd] = useState("");

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
    }
  };

  //TODO ADD ERROR HANDLER FOR BLANK NAME

  return (
    <div className={ModalStyles.rootContainer}>
      <h3>New to this session? Please enter your name</h3>
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
      <div>
        <Button onClick={onAddParticipantHandler}>Add Participant</Button>
      </div>
    </div>
  );
};

export default EnterParticipantModal;
