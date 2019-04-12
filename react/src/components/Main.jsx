import React from 'react';
import MessageList from './MessageList.jsx';

const Main = ({messages}) => {
  return(
    <main className="messages">    
      <MessageList messages={messages} />
    </main>
  )
}

export default Main;
