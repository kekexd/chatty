import React, {Component} from 'react';

const Chatbar = (props) => {
  return(
    <footer className="chatbar">
      <input className="chatbar-username" placeholder={props.username} />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={props.addMsg}/>
    </footer> 
  )
}

export default Chatbar;
