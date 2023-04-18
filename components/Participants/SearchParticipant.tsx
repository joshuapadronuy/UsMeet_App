import SearchStyles from "../../styles/SearchParticipantSection.module.css";
import SearchField from "../UI/SearchField";

const SearchParticipant = () => {
  return (
    <div className={SearchStyles.rootContainer}>
      <SearchField />
    </div>
  );
};

export default SearchParticipant;
