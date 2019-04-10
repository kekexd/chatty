import React, {Component} from 'react';
import Nav from './components/Nav.jsx';
import Chatbar from './components/Chatbar.jsx';
import Main from './components/Main.jsx';
require('../styles/application.scss');
//const uuidv1 = require('uuid/v1');

const data = {
  currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    { 
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    { 
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: data.currentUser.name,
      messages: data.messages,
      notices: `Hello, ${data.currentUser.name}!`
    };
  }
  
  webSocket = new WebSocket('ws://localhost:3001');

  componentDidMount() {
    //console.log("componentDidMount <App />");
    this.webSocket.onopen = (evt) => {
      this.webSocket.send(JSON.stringify('client is connected to server'));
    }

    this.webSocket.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      this.setState({
        messages: [...this.state.messages, 
          {
            id: msg.id,
            username: msg.username,
            content: msg.content
          }
        ]
      })
    } 

    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }
  
  switchUser = e => {
    if (e.key === 'Enter') {
      const oldUsername = this.state.username;
      const newUsername = e.target.value;
      if(this.state.username!==newUsername){
        this.setState({
          notices: oldUsername+" has changed name to "+newUsername,
          username: newUsername
        })
      }
      e.target.value='';
    }
  } 

  addMsg = e => {
    if (e.key === 'Enter') {
      // e.target.value ?
        // this.setState({
        //   messages: [...this.state.messages, {
        //     id: Math.floor((Math.random() * 10000) + 4), 
        //     username:this.state.username, 
        //     content:e.target.value
        //   }]
        // }) : alert('This message is too short');
      let msg ={
        //id: uuidv1(), 
        username: this.state.username, 
        content: e.target.value,
        type: 'msg'
      }
      this.webSocket.send(JSON.stringify(msg))
      e.target.value='';
    }

    // this.webSocket.onmessage = (evt) => {
    //   console.log(evt.data)
    
    // }
  }

  



  render() {
    return (    
      <React.Fragment>
        <Nav />
        <Main messages={this.state.messages} notices={this.state.notices} />
        <Chatbar username={this.state.username} switchUser={this.switchUser} addMsg={this.addMsg}/>
      </React.Fragment> 
    );
  }
}
export default App;
