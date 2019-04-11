// server.js

const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

//Broadcast to all
wss.broadcast = (data) => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
let counter = 0;
wss.on('connection', (ws) => {
  counter ++;
  console.log(counter + ' Client connected');
  let numberOfUsers = {
    nOfUsers: counter,
    type: 'nOfUsers'
  }
  wss.broadcast(JSON.stringify(numberOfUsers))

  ws.on('message', (data) => {
    let msg = JSON.parse(data);
    console.log(msg)
      msg.id = uuidv1();
      wss.broadcast(JSON.stringify(msg))    
  })

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    counter --;
    let numberOfUsers = {
      nOfUsers: counter,
      type: 'nOfUsers'
    }
    wss.broadcast(JSON.stringify(numberOfUsers))
    console.log('Client disconnected')
  });
});
