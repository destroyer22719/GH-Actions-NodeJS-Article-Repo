const express = require('express');
const app = express();
const serverless = require('serverless-http');
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/secret', (req, res) => {
  res.send(process.env.API_KEY)
})

module.exports.handler = serverless(app)

app.listen(process.env.PORT || 3000);