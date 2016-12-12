# socket-example  

<div style="text-align:center"><img src ="isPalindrome.png" width="400"/></div>
<div style="text-align:center"><img src ="notPalindrome.png" width="400" /></div>

## Prerequesites
  - Node.js
  - A browser(Chrome, Firefox, etc)

## Dependencies
  - pug - html renderer
  - express - html server
  - serve-favicon - servers favicon image
  - socket.io - handles web socket

## Installing Node.js on Linux Ubuntu
- To install Node.js, type the following command in your terminal:
```
sudo apt-get install nodejs
```
- Then install the Node package manager, npm:
```
sudo apt-get install npm
```
- Create a symbolic link for node, as many Node.js tools use this name to execute.
```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
- To check the current versions of Node.js and npm enter the following commands:
```
node -v
npm -v
```

## Installing Node.js on Mac

- If you don't have Homebrew installed already, install it by entering the following command into your terminal:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- After brew is installed you can install both Node.js and npm by entering in:
```
brew install node
```

## Installing Node.js on Windows
- See the following link: http://blog.teamtreehouse.com/install-node-js-npm-windows

## Installation
- First clone this repository by navigating to your projects directory and entering the following command into your terminal:
```
git clone https://github.com/clintonbess/socket-example.git
```
- Navigate to the socket-example directory:
```
cd socket-example
```
- Install the required Node.js dependencies:
```
sudo npm install
```
- Start the server:
```
npm start
```
- In your browser, navigate to localhost:8000 to see the socket example in action!

