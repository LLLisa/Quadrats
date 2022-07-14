const express = require('express');
const app = express();
const path = require('path');
const { db, Tile } = require('./db');

module.exports = app;

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/tiles', async (req, res, next) => {
  try {
    const response = await Tile.findAll();
    res.send(response);
  } catch (error) {
    next(error);
  }
});
