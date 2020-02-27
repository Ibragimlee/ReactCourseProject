import React from 'react';
import classes from './Post.module.css';

const Post = (props)=>{
  return(
    <div className={classes.item}>
      <div className={classes.left}>
        <img src="https://www.svgrepo.com/show/129839/avatar.svg" alt=""/>
      </div>
      <div className={classes.right}>
        <span className="text">{props.message}</span>
        <span className="likes">Likes = {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;