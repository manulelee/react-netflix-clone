import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  onscroll = () => {
    setScrollY(window.scrollY);
  };
  const profile = useSelector((state) => state.profile.profile);
  return (
    <nav className={scrollY > 10 ? classes.navScrolled : classes.nav}>
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
              <span className="flex justify-center items-center">
                {profile.name}
                <img src={profile.selectedAvatar.link} className={classes.avatar} alt="profile avatar" />
              </span>
            </NavLink>
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
