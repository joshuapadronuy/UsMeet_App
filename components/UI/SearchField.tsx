import SearchFieldStyles from "../../styles/SearchField.module.css";

interface IProps {
  placeholder: string;
}

const SearchField = ({ placeholder }: IProps) => {
  return (
    <div className={SearchFieldStyles.rootContainer}>
      <input
        className={SearchFieldStyles.search}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchField;
