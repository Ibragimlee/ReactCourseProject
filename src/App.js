import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <aside>
          <Nav />
        </aside>
        <Profile />
      </main>
      <Footer />
    </div>
  )
}


export default App;
