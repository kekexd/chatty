import React, {Component} from 'react';

const Footer = () => {
  return(
    <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your Name (Optional)" />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer> 
  )
}

export default Footer;
