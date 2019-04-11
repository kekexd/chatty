import React, {Component} from 'react';

const NotificationItem = (props) => {
  //console.log('hello');
  return(
    <div className="notification">
      <span className="notification-content">{props.notification.content}</span>
    </div>
  )
}

export default NotificationItem;


