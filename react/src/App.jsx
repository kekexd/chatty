import React, {Component} from 'react';
import Nav from './components/Nav.jsx';
import Chatbar from './components/Chatbar.jsx';
import Main from './components/Main.jsx';
require('../styles/application.scss');

const data = {
  currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    { 
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
      color: "tan",
      type: 'msg'
    },
    { 
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
      color: "grey",
      type: 'msg'
    }
  ]
}

const colors = ['#f44197', '#4286f4', '#f4c741', '#cdf441']


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: data.currentUser.name,
      color: colors[Math.floor(Math.random() * colors.length)],
      messages: data.messages,
      nOfUsers: 0
    };
  }
  
  webSocket = new WebSocket('ws://localhost:3001');

  componentDidMount() {
    this.webSocket.onopen = (evt) => {
      this.webSocket.send(JSON.stringify('client is connected to server'));
    }

    this.webSocket.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      if(msg.type === 'msg' || msg.type === 'notification') {
        this.setState({
          messages: [...this.state.messages, 
            {
              id: msg.id,
              username: msg.username,
              content: msg.content,
              color: msg.color,
              type: msg.type
            }
          ]
        })
      } else if (msg.type === 'nOfUsers') {
        this.setState({
          nOfUsers: msg.nOfUsers
        })
      }

    } 

  }
  
  switchUser = e => {
    if (e.key === 'Enter') {
      const oldUsername = this.state.username;
      const newUsername = e.target.value;
      if(oldUsername!== newUsername && newUsername){
        this.setState({
          username: newUsername
        })
        let msg = {
          username: newUsername,
          content: oldUsername+" has changed his/her name to "+newUsername,
          color: null,
          type: 'notification'
        }
        this.webSocket.send(JSON.stringify(msg))
      }
      e.target.value='';
    }
  } 

  addMsg = e => {
    if (e.key === 'Enter' && e.target.value) {
      let msg ={
        username: this.state.username, 
        content: e.target.value,
        color: this.state.color,
        type: 'msg'
      }
      this.webSocket.send(JSON.stringify(msg))
      e.target.value='';
    }

  }


  render() {
    return (    
      <React.Fragment>
        <Nav nOfUsers={this.state.nOfUsers} />
        <Main messages={this.state.messages} />
        <Chatbar username={this.state.username} switchUser={this.switchUser} addMsg={this.addMsg}/>
      </React.Fragment> 
    );
  }
}
export default App;
