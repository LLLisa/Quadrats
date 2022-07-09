const express = require('express');
const app = express();
const path = require('path');
const { seed } = require('./db');

const port = process.env.PORT || 1337;

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const init = () => {
  try {
    seed();
    app.listen(port, () => console.log(`glistening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();

module.exports = { port };
