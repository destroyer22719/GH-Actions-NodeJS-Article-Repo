const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/secret', (req, res) => {
  res.send(process.env.API_KEY)
})

app.listen(process.env.PORT || 3000);