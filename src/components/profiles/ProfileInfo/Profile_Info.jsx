import React from "react";
import classes from "./Profile_Info.module.css";
import banner from "../../../assets/bodybg.jpg";
import Preloader from "../../common/Preloader/Preloader";
import fb_icon from "../../../assets/icons/fb_icon.png";
import github_icon from "../../../assets/icons/github_icon.png";
import insta_icon from "../../../assets/icons/insta_icon.png";
import twitter_icon from "../../../assets/icons/twitter_icon.png";
import vk_icon from "../../../assets/icons/vk_icon.png";
import youtube_icon from "../../../assets/icons/youtube_icon.png";
import Social_Icon from "../../../helpers/Social_Icons/Social_Icons";

const Profile_Info = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  const checkLookingForAJob = () => {
    if (props.profile.lookingForAJob == true) {
      return (
        <div className={classes.lookingForDesc}>
          {props.profile.lookingForAJobDescription}
        </div>
      );
    }
  };

  return (
    <div className={classes.profile_info}>
      <div className={classes.profile_cover}>
        <img src={banner} alt="profile_banner_image" />
      </div>
      <div className={classes.profile_description}>
        <div className={classes.description_left}>
          <div className={classes.avatar}>
            <img
              src={
                props.profile.photos.small
                  ? props.profile.photos.small
                  : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              }
              alt=""
            />
          </div>
          {checkLookingForAJob()}
        </div>
        <div className={classes.description_right}>
          <div className={classes.description_top}>
            <div className={classes.fullname}>
              <h2>{props.profile.fullName}</h2>
            </div>
            <div className={classes.social_links}>
              <Social_Icon
                link={props.profile.contacts.facebook}
                img={fb_icon}
              />
              <Social_Icon
                link={props.profile.contacts.github}
                img={github_icon}
              />
              <Social_Icon
                link={props.profile.contacts.instagram}
                img={insta_icon}
              />
              <Social_Icon
                link={props.profile.contacts.twitter}
                img={twitter_icon}
              />
              <Social_Icon link={props.profile.contacts.vk} img={vk_icon} />
              <Social_Icon
                link={props.profile.contacts.youtube}
                img={youtube_icon}
              />
            </div>
          </div>
          <div className={classes.description_bottom}>
            <p>{props.profile.aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Info;
