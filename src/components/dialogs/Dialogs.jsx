import React from 'react';
import classes from './Dialogs.module.css';
import Dialog_Item from './Dialog_Item/Dialog_Item';
import Message from './Message/Message';

const Dialogs = (props)=>{

  let state = props.dialogsPage;

  let showDialogItems = state.dialogsData.map((data)=> <Dialog_Item name={data.name} key={data.id} id={data.id} />);
  let showMessages = state.messagesData.map(mes => <Message message={mes.message} key={mes.id} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () =>{
    props.sendMessage();
  }

  let onNewMessageChanged = (e) =>{
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return(
    <div className={classes.dialogs}>
      <div className={classes.dialog_items}>
        {showDialogItems}
      </div>
      <div className={classes.message_items}>
        <div>{showMessages}</div>
        <div>
          <div><textarea value={newMessageBody} 
                          placeholder="Enter your message"
                          onChange={onNewMessageChanged}></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;