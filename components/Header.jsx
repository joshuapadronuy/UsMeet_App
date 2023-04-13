import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.rootContainer}>
      <h1 className={headerStyles.title}>
        Welcome to <span>Pollaborate!</span> 
      </h1>
      <p className={headerStyles.description}>
          Do a poll to know when everyone is free.
      </p>
    </div>
  );
};

export default Header;
