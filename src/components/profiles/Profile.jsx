import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profile_Info from './ProfileInfo/Profile_Info';

const Profile = ()=>{
  return(
    <article className={classes.profile_article}>
      <div className={classes.profile_top}>
        <Profile_Info />
      </div>
      <div className={classes.profile_bottom}>
        <MyPosts />
      </div>
    </article>
  )
}

export default Profile;