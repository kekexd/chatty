import React, {Component} from 'react';

const MessageItem = (props) => {
  // console.log("Rendering <MessageItem />");
  return(
    <div className="message">
      <span className="message-username">{props.message.username}</span>
      <span className="message-content">{props.message.content}</span>
    </div>
  )
}

export default MessageItem;


