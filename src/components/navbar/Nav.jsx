import React from "react";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.nav_link}`}>
        <NavLink to="/profile/6439" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={classes.nav_link}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={classes.nav_link}>
        <NavLink to="/users" activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
      <div className={classes.nav_link}>
        <NavLink to="/news" activeClassName={classes.active}>
          News
        </NavLink>
      </div>
      <div className={classes.nav_link}>
        <NavLink to="/music" activeClassName={classes.active}>
          Music
        </NavLink>
      </div>
      <div className={classes.nav_link}>
        <NavLink to="/settings" activeClassName={classes.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
