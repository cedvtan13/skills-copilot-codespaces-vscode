// Create web server
// Create a web server that listens to requests on port 3000.
// When a client sends a request to the server, the server should respond with a status code of 200 and a body containing the text "Hello, World!".
// The server should be created using the http module.
// The server should listen on port 3000.
// The server should respond with a status code of 200.
// The server should respond with the text "Hello, World!".
// The server should respond with a content-type of text/plain.
// The server should respond with a content-length of 13.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': 13
  });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
