import React from 'react';

const Chatbar = (props) => {
  return(
    <footer className="chatbar">
      <input className="chatbar-username" placeholder={props.username} onKeyUp={props.switchUser}/>
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={props.addMsg}/>
    </footer> 
  )
}

export default Chatbar;
