const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.post(`/youtube`, (req, res) => {
  const queryString = req.body.query.split(' ').join('+');
  res.send();
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server.js is listening in on port ${process.env.SERVER_PORT}`);
})
