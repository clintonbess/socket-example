const PORT = 8000;

const pug = require('pug');
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const server = require('http').Server(app);
const socketIo = require('socket.io')(server);

// initializes options for the server
var serverInit = function() {
  server.listen(PORT);
  console.log('Server is listening on port %d', PORT);

  app.set('view engine', 'pug');
  app.set('views', './views')
  app.use(favicon(__dirname + '/public/images/favicon.ico'));
  app.use(express.static(__dirname + '/public'));

  app.get('/', function (req, res) {  
    res.render('index', 
      {
        title: 'A Socket Example'
      }
    );
  });

  socketIo.on('connection', function (socket) {
    console.log('Client connected');
    socket.on('check-palindrome', function (msg) {
      console.log('Checking palindome');
      socket.emit('palindrome-answer', isPalindrome(msg));
    })
  });
};

var isPalindrome = function(msg) {
  var replacedChars = msg.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  var rMsg = replacedChars.split('').reverse().join('');
  return (rMsg === replacedChars) ? 1 : 0;
};
// -------------------------
// Main 
// -------------------------
serverInit();