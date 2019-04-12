import React from 'react';
import MessageItem from './MessageItem.jsx';
import NotificationItem from './NotificationItem.jsx'

const MessageList = (props) => {
  return(
    props.messages.map(message => (
      // check if the incoming message is a client's message or a server's notification
      message.type === 'msg' ?
      <MessageItem message={message} key={message.id}/> :
      <NotificationItem notification={message} key={message.id}/>
    ))
  )
}

export default MessageList;


