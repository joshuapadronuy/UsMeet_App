import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "../../UI/TextField";
import Button from "../../UI/Button";
import { IReduxState } from "../../../types/ReduxState";
import { addParticipant } from "../../../store/slices/participants-slice";
import RadioInput from "../../UI/RadioInput";
import ParticipantsListSmall from "./ParticipantListSmall";
import ModalStyles from "../../../styles/EnterSessionModal.module.css";

interface IProps {
  setShowEnterModal: Dispatch<SetStateAction<boolean>>;
}

const EnterSessionModal = ({ setShowEnterModal }: IProps) => {
  const dispatch = useDispatch();
  const { participantsList, selectedParticipant } = useSelector(
    (state: IReduxState) => state.participants
  );
  const [errorNameExists, setErrorNameExists] = useState(false);
  const [nameToAdd, setNameToAdd] = useState("");
  const [isNewToSession, setIsNewToSession] = useState(true);

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

  const onJoinSessionHandler = () => {
    if (isNewToSession) {
      setErrorNameExists(nameAlreadyExists(nameToAdd));
      if (!nameAlreadyExists(nameToAdd)) {
        dispatch(addParticipant({ participantName: nameToAdd }));
        setShowEnterModal(false);
      }
    } else if (!isNewToSession && selectedParticipant) {
      setShowEnterModal(false);
    }
  };

  //TODO replace session name with session name property fetched from DB
  const SESSION_NAME = "SESSION_NAME";

  //TODO ADD ERROR HANDLER FOR BLANK NAME

  const radioHandler = (event) => {
    const value = event.target.value;
    setIsNewToSession(value == "Yes" ? true : false);
    setErrorNameExists(false);
  };

  return (
    <div className={ModalStyles.rootContainer}>
      <h3>Are you new to this session? {SESSION_NAME}</h3>
      <div className={ModalStyles.isNewToSession}>
        <RadioInput
          id={"Yes"}
          groupName={"isNewToSession"}
          onClickHandler={radioHandler}
          isSelected={isNewToSession == true}
        />
        <RadioInput
          id={"No"}
          groupName={"isNewToSession"}
          onClickHandler={radioHandler}
          isSelected={isNewToSession == false}
        />
      </div>
      {/* Participant name input */}
      {isNewToSession ? (
        <div>
          <h3>Please enter your name</h3>
          <TextField.Error
            message="Username for this session is already taken"
            hasError={errorNameExists}
          >
            <TextField.Input
              placeholder="Enter Participant Name..."
              value={nameToAdd}
              onChange={onChangeNameToAddHandler}
            />
          </TextField.Error>
        </div>
      ) : (
        <div>
          <h3>Please select your participant name for this session.</h3>
          <ParticipantsListSmall />
        </div>
      )}
      <div>
        <Button onClick={onJoinSessionHandler}>Join Session</Button>
      </div>
    </div>
  );
};

export default EnterSessionModal;
