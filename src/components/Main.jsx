import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageSystem from './MessageSystem.jsx';


const Main = () => {
  return(
    <main className="messages">
      <MessageList />
      <MessageSystem />
    </main>
  )
}

export default Main;
