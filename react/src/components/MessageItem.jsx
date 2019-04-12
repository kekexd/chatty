import React from 'react';

//extract the image url from message
const checkURL = msg => {
  return(msg.match(/(http(s?):)([/|.|\w|\s|-|\;|\-|\=][^;"])*\.(?:png|jpg|jpeg|gif|png|svg)/g) );
}

const MessageItem = ({message}) => {
  const style = {color: message.color};
  return(
    <div className="message">
      <span className="message-username" style={style}>{message.username}</span>
      {/* check if the incoming message is a plain text message or including img url */}
      {checkURL(message.content) ? 
      <span className="message-content">{message.content.replace(checkURL(message.content), '')}<br/> <img src={checkURL(message.content)} /> </span> :
      <span className="message-content">{message.content}</span>
      }
     
    </div>
  )
}

export default MessageItem;


