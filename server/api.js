const express = require('express');
const app = express();
const path = require('path');
const { Tile, swapGen } = require('./db');

module.exports = app;

app.use(express.json());
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

app.put('/swap', async (req, res, next) => {
  try {
    const tile1 = await Tile.findByPk(req.body.tile1.id);
    const tile2 = await Tile.findByPk(req.body.tile2.id);
    const swap = {
      alphanum: tile1.alphanum,
      color: tile1.color,
      shape: tile1.shape,
    };
    await tile1.update({
      alphanum: tile2.alphanum,
      color: tile2.color,
      shape: tile2.shape,
    });
    await tile2.update(swap);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.get('/randomize', async (req, res, next) => {
  try {
    await Tile.destroy({
      where: {
        isSwap: true,
      },
    });
    swapGen(16);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
