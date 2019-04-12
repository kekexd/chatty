import React from 'react';

const NotificationItem = (props) => {
  return(
    <div className="notification">
      <span className="notification-content">{props.notification.content}</span>
    </div>
  )
}

export default NotificationItem;


