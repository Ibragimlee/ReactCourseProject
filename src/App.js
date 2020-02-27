import React, { Component } from 'react';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profiles/Profile';
import Footer from './components/footer/Footer';
import Dialogs from './components/dialogs/Dialogs';
import classes from './App.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';


const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app_wrapper}>
        <Header />
        <main>
          <aside>
            <Nav />
          </aside>
          <div className={classes.app_wrapper_content}>
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;
