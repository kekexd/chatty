import React, {Component} from 'react';

const Nav = ({nOfUsers}) => {
  return(
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <div className="nOfUsers">{nOfUsers + ' users online'}</div> 
    </nav>
  )
}

export default Nav;
