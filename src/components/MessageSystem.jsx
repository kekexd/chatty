import React, {Component} from 'react';

const MessageSystem = (props) => {
  // console.log("Rendering notice");
  return(
    <div className="message system">
      {props.notices}
    </div>
  )
}

export default MessageSystem;

