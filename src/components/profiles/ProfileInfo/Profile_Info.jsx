import React from 'react';
import classes from './Profile_Info.module.css';
import banner from '../../../assets/bodybg.jpg';

const Profile_Info = ()=>{
  return(
    <div className={classes.profile_info}>
      <div className={classes.profile_cover}>
        <img src={banner} alt="profile_banner_image"/>
      </div>
      <div className={classes.profile_description}>
        <div className={classes.description_left}>
          <div className={classes.avatar}>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
          </div>
        </div>
        <div className={classes.description_right}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dignissimos laborum vel beatae autem sequi nulla voluptatem velit. Debitis, error?</p>
        </div>
      </div>
    </div>
  )
}

export default Profile_Info;