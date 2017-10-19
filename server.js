const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`Server is connected!`)
})

server.listen(3001, 'localhost', () => {
  console.log(`server.js is listening in on port 3001`)
})