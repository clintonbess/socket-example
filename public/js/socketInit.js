var socket = io.connect('http://localhost:8000');

var loaded = 0;

initSocket();

function initSocket() {
  socket.on('palindrome-answer', function (answer) {
    if (answer === 1) {
      displayAnswer('is-palindrome');
    }
    else {
      displayAnswer('not-palindrome');
    }
  });
};

function checkPalindrome() {
  hideAnswers();
  var inputValue = document.getElementById('palindrome-field').value;
  socket.emit('check-palindrome', inputValue);
};

function hideAnswers() {
  document.getElementById('is-palindrome').style.visibility = 'hidden';
  document.getElementById('is-palindrome').style.display = 'none';

  document.getElementById('not-palindrome').style.visibility = 'hidden';
  document.getElementById('not-palindrome').style.display = 'none';
};

function displayAnswer(id) {
  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id).style.display = 'block';
};


