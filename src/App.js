import React, { Component } from "react";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import classes from "./App.module.css";
import { Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profiles/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const App = props => {
  return (
    <div className={classes.app_wrapper}>
      <HeaderContainer />
      <main>
        <aside>
          <Nav />
        </aside>
        <div className={classes.app_wrapper_content}>
          {/* <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
