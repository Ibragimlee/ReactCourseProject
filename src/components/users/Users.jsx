import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  let goToInput = React.createRef();

  let goToPage = () => {
    if (goToInput.current.value > 0 && goToInput.current.value <= pagesCount) {
      props.onPageChanged(goToInput.current.value);
    } else {
      alert(`Введите от 1 до ${pagesCount}`);
    }
  };

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  let prevBtn = () => {
    if (props.currentPage != 1) {
      return (
        <span
          onClick={e => {
            props.onPageChanged(parseInt(props.currentPage - 1));
          }}
        >
          Prev
        </span>
      );
    }
  };

  let nextBtn = () => {
    if (props.currentPage < pagesCount) {
      return (
        <span
          onClick={e => {
            props.onPageChanged(parseInt(props.currentPage) + 1);
          }}
        >
          Next
        </span>
      );
    }
  };

  return (
    <div>
      <div className={classes.pagination}>
        {prevBtn()}

        {pages.map((p, i) => {
          if (i >= props.currentPage - 1 && i <= props.currentPage + 2) {
            return (
              <span
                key={i}
                className={props.currentPage === p ? classes.selectedPage : ""}
                onClick={e => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          }
        })}

        {<input type="number" ref={goToInput} onBlur={goToPage} />}

        {nextBtn()}
      </div>
      <div className={classes.users_container}>
        {props.users.map(user => (
          <div key={user.id} className={classes.user_card}>
            <div className={classes.left}>
              <NavLink
                className={classes.to_profile_link}
                to={"/profile/" + user.id}
              >
                <img
                  src={
                    user.photos.small == null
                      ? "http://www.4dheart.eu/wp-content/uploads/2016/12/user.png"
                      : user.photos.small
                  }
                  alt=""
                />
              </NavLink>
              <button
                className={user.followed ? classes.unfollow : classes.follow}
                onClick={() => {
                  user.followed
                    ? props.unfollow(user.id)
                    : props.follow(user.id);
                }}
              >
                {user.followed ? "Unfollow" : "Follow"}
              </button>
            </div>
            <div className={classes.right}>
              <div className={classes.text_left}>
                <span>{user.name}</span>
                <p>{user.status}</p>
              </div>
              <div className={classes.text_right}>
                <span>{"user.location.country"}</span>
                <span>{"user.location.city"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
