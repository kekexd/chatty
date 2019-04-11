import React, {Component} from 'react';
import NotificationItem from './NotificationItem.jsx'

const MessageSystem = (props) => {
  return(
    props.notifications.map(notification => (
      <NotificationItem notification={notification} />
    ))
  )
}

export default MessageSystem;

