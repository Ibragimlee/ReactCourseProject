import React from "react";
import classes from "./Users.module.css";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / (props.pageSize * 40));

  let pages = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={classes.pagination}>
        {pages.map((p, i) => {
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
        })}
      </div>
      <div className={classes.users_container}>
        {props.users.map(user => (
          <div key={user.id} className={classes.user_card}>
            <div className={classes.left}>
              <img
                src={
                  user.photos.small == null
                    ? "http://www.4dheart.eu/wp-content/uploads/2016/12/user.png"
                    : user.photos.small
                }
                alt=""
              />
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
