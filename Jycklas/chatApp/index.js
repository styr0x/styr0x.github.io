const app= require('express')();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });  

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

http.listen(3000, () => {
    console.log('listening on *:3000');
});