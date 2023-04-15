import Link from "next/link";
import navStyles from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.mainMenu}>
        <li className={navStyles.logo}>
          <Link href="/">Pollaborate</Link>
        </li>
        <ul className={navStyles.rightNav}>
          <li>
            <Link href="/poll-availabilities">Do a Poll</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
