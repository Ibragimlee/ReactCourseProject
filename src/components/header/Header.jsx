import React from 'react';
import Classes from './header.module.css';
import header_logo from '../../assets/header_logo.png';


const Header = ()=>{
  return(
    <header>
      <a href="#">
        <img src={header_logo}></img>
      </a>
    </header>
  )
}

export default Header;