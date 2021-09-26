import { NavLink } from 'react-router-dom';

import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.NavBar}>
      <ul className={styles.list}>
        <li>
          <NavLink
            exact
            to="/main"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
