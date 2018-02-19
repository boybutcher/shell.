const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.post(`/youtube`, (req, res) => {
  const queryString = req.body.query.split(' ').join('+');
  const queryUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${queryString}&key=${process.env.YOUTUBE_KEY}`;
  
  request(queryUrl, (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    } else {
      console.error('GET YouTube request failed...');
      res.status(400).send({error});
    }
  })
})

app.listen(process.env.SERVER_PORT || 3001, () => {
  console.log(`server.js is listening in on port ${process.env.SERVER_PORT}`);
})
