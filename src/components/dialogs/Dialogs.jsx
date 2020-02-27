import React from 'react';
import classes from './Dialogs.module.css';
import Dialog_Item from './Dialog_Item/Dialog_Item';
import Message from './Message/Message';

const Dialogs = (props)=>{

  let dialogsData =[
    {id: 1, name: 'Sabir'}, 
    {id: 2, name: 'Adil'},
    {id: 3, name: 'Lala'},
    {id: 4, name: 'Sarxan'},
    {id: 5, name: 'Vuqar'}
  ]

  let messagesData =[
    {id: 1, message: 'here could be your message 1'}, 
    {id: 2, message: 'here could be your message 2'},
    {id: 3, message: 'here could be your message 3'},
    {id: 4, message: 'here could be your message 4'},
    {id: 5, message: 'here could be your message 5'}
  ]

  let showDialogItems = dialogsData.map((data)=> <Dialog_Item name={data.name} id={data.id} />);
  let showMessages = messagesData.map(mes => <Message message={mes.message} />);

  return(
    <div className={classes.dialogs}>
      <div className={classes.dialog_items}>
        {showDialogItems}
      </div>
      <div className={classes.message_items}>
        {showMessages}
      </div>
    </div>
  )
}

export default Dialogs;