import React, {Component} from 'react';

const checkURL = url => {
  return(url.match(/\.(jpeg|jpg|gif|png|img)$/) != null);
}

const MessageItem = ({message}) => {
  const style = {color: message.color}
  const msg = message.content.split('http')[0];
  const url = 'http' + message.content.split('http')[1];
  //console.log(message);
  return(
    <div className="message">
      <span className="message-username" style={style}>{message.username}</span>
      {checkURL(message.content) ?  
      <span className="message-content">{msg}<br/><img src={url} /></span> :
      <span className="message-content">{msg}</span>  
      }
     
    </div>
  )
}

export default MessageItem;


