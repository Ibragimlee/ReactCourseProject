import React from "react";
import Classes from "./header.module.css";
import header_logo from "../../assets/header_logo.png";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header>
      <a href="#">
        <img src={header_logo}></img>
      </a>

      <div className={classes.login_block}>
        {props.isAuth ? (
          <NavLink to={`/profile/${props.id}`}>{props.login}</NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
