import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageSystem from './MessageSystem.jsx';


const Main = (props) => {
  console.log("Rendering <Main />");
  return(
    <main className="messages">
      <MessageList messages={props.messages}/>
      <MessageSystem />
    </main>
  )
}

export default Main;
