import React, {Component} from 'react';

//verify if the incoming message contains an image url
const checkURL = url => {
  return(url.match(/(http(s?):)([/|.|\w|\s|-|\;|\-|\=][^;"])*\.(?:png|jpg|jpeg|gif|png|svg)/g) );
}

const MessageItem = ({message}) => {
  const style = {color: message.color};

  const url = checkURL(message.content)

  return(
    <div className="message">
      <span className="message-username" style={style}>{message.username}</span>
      {/* check if the incoming message is a plain text message or including img url */}
      {checkURL(message.content) ? 
      <span className="message-content">{message.content.replace(url, '')}<br/> <img src={url} /> </span> :
      <span className="message-content">{message.content}</span>
      }
     
    </div>
  )
}

export default MessageItem;


