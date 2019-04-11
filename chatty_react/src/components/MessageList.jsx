import React, {Component} from 'react';
import MessageItem from './MessageItem.jsx';
import NotificationItem from './NotificationItem.jsx'

const MessageList = (props) => {
  return(
    props.messages.map(message => (
      message.type === 'msg' ?
      <MessageItem message={message} key={message.id}/> :
      <NotificationItem notification={message} key={message.id}/>
    ))
  )
}

export default MessageList;


