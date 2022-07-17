const express = require('express');
const app = express();
const path = require('path');
const { db, MainTile, SwapTile } = require('./db');

module.exports = app;

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/mainTiles', async (req, res, next) => {
  try {
    const response = await MainTile.findAll();
    res.send(response);
  } catch (error) {
    next(error);
  }
});

app.get('/swapTiles', async (req, res, next) => {
  try {
    const response = await SwapTile.findAll();
    res.send(response);
  } catch (error) {
    next(error);
  }
});
