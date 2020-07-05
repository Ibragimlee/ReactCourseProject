import React from "react";
import preloader from "../../../assets/loader-svg.svg";
import classes from "./Preloader.module.css";

let Preloader = props => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt="" />{" "}
    </div>
  );
};

export default Preloader;
