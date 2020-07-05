import React from "react";
import Header from "./Header";
import Axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, toggleIsFetching } from "../../redux/Auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(response => {
      if (response.data.resultCode === 0) {
        this.props.toggleIsFetching(false);
        let { id, login, email } = response.data.data;
        this.props.setAuthUserData(id, email, login);
        console.log(response.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
  };
};

export default HeaderContainer = connect(mapStateToProps, {
  setAuthUserData,
  toggleIsFetching
})(HeaderContainer);
