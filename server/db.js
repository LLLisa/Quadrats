const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/quadrats', { logging: false });

const { colors, shapes, chars, randomize } = require('./data');

const Tile = db.define('tile', {
  alphanum: {
    type: Sequelize.ENUM(chars),
  },
  color: {
    type: Sequelize.ENUM(colors),
  },
  shape: {
    type: Sequelize.ENUM(shapes),
  },
});

const tileGen = async () => {
  try {
    await Tile.create({
      alphanum: randomize(chars),
      color: randomize(colors),
      shape: randomize(shapes),
    });
  } catch (error) {
    console.log(error);
  }
};

const gridGen = (numTiles) => {
  for (let i = 0; i < numTiles; i++) {
    tileGen();
  }
};

const seed = async () => {
  try {
    await db.sync({ force: true });
    gridGen(64);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { seed };
