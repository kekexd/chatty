import React, {Component} from 'react';
import MessageItem from './MessageItem.jsx';

const MessageList = (props) => {
  console.log("Rendering <MessageList />");
  return(
    props.messages.map(message => (
      <MessageItem message={message} key={message.id}/>
    ))
  )
}

export default MessageList;


