import React, {Component} from 'react';

const MessageItem = ({message}) => {
  const style = {color: message.color}
  console.log(message);
  return(
    <div className="message">
      <span className="message-username" style={style}>{message.username}</span>
      <span className="message-content">{message.content}</span>
    </div>
  )
}

export default MessageItem;


