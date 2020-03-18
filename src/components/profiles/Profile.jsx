import React from 'react';
import classes from './Profile.module.css';
import Profile_Info from './ProfileInfo/Profile_Info';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props)=>{
  return(
    <article className={classes.profile_article}>
      <div className={classes.profile_top}>
        <Profile_Info />
      </div>
      <div className={classes.profile_bottom}>
        <MyPostsContainer />
      </div>
    </article>
  )
}


export default Profile;