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

//function to broadcast to all
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
  //increase the counter by 1 whenever a client is connected, and broadcast the updated counter
  counter ++; 
  console.log(counter + ' Client connected');
  let numberOfUsers = {
    nOfUsers: counter,
    type: 'nOfUsers'
  }
  wss.broadcast(JSON.stringify(numberOfUsers))

  //on receiving a message, assign a random id to the message and broadcast it
  ws.on('message', (data) => {
    let msg = JSON.parse(data);
      msg.id = uuidv1();
      wss.broadcast(JSON.stringify(msg))    
  })

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    //decrease the counter by 1 whenever a client leaves, and broadcast the updated counter
    counter --; 
    let numberOfUsers = {
      nOfUsers: counter,
      type: 'nOfUsers'
    }
    wss.broadcast(JSON.stringify(numberOfUsers))
    console.log('Client disconnected')
  });
});
