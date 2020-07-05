import React from "react";
import classes from "./Social_Icons.module.css";

const Social_Icon = props => {
  if (!props.link) {
    return null;
  }

  const checkLink = url => {
    if (url.includes("https://")) {
      return props.link;
    } else {
      return `https://${props.link}`;
    }
  };

  return (
    <a
      href={checkLink(props.link)}
      target="_blank"
      className={classes.social_link}
    >
      <img src={props.img} alt="" />
    </a>
  );
};

export default Social_Icon;
