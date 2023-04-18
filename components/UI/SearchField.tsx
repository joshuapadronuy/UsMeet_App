import SearchFieldStyles from "../../styles/SearchField.module.css";

const SearchField = () => {
  return (
    <div className={SearchFieldStyles.rootContainer}>
      <input
        className={SearchFieldStyles.search}
        type="text"
        placeholder="Search Participant..."
      />
    </div>
  );
};

export default SearchField;
