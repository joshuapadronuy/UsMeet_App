import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Welcome to <span>UsMeet!</span> 
      </h1>
      <div className={headerStyles.descriptionContainer}>
        <p className={headerStyles.description}>
          Do a poll to know when everyone is free.
        </p>
      </div>
    </div>
  );
};

export default Header;
