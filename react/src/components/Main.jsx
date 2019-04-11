import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageSystem from './MessageSystem.jsx';
// import MessageItem from './MessageItem.jsx';
// import NotificationItem from './NotificationItem.jsx'


const Main = ({messages}) => {
  //console.log(messages);
  return(
    // messages.type === 'msg'? 
    // <MessageList messages={messages}/> :
    // <MessageSystem notifications={messages}/>

    <main className="messages">    
      {/* <div> */}
      <MessageList messages={messages} />
      {/* </div>
      <div>
        <MessageSystem notifications={props.notifications}/>
      </div> */}
    </main>
  )
}

export default Main;
