import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <span className={classes.section}>
          <Link to="/">
            <img src="/images/netflix_logo.png" alt="netflix logo" />
          </Link>
          <li>
            <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/movies">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/shows">
              Shows
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/new">
              New & Trends
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/my-list">
              My List
            </NavLink>
          </li>
        </span>
        <span className={classes.section}>
          <li>
            <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/profile">
              Profile
            </NavLink>
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
