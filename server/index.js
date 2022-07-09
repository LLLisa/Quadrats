const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 42069;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const init = () => {
  try {
    app.listen(port, () => console.log(`glistening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();
