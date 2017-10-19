const express = require('express');
require('dotenv').config();

const app = express(); 

app.get(`/`, (req, res) => {
  console.log("endpoint of '/' hit!");
  res.send('does this show in console');
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server.js is listening in on port ${process.env.SERVER_PORT}`);
})
