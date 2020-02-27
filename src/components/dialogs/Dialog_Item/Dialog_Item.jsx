import React from 'react';
import classes from './Dialog_Item.module.css';
import { NavLink } from 'react-router-dom';


const Dialog_Item = (props) =>{
  return(
    <div className={`${classes.dialog}`}>
      <NavLink activeClassName={classes.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog_Item;