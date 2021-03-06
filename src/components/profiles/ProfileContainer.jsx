import React from "react";
import Profile from "./Profile";
import Axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/Profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  debugger;
  componentDidMount() {
    let userId = this.props.match.params.userId;
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    ).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  withUrlDataContainerComponent
);
