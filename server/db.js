const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/quadrats', { logging: false });

const { colors, shapes, chars, randomize } = require('./data');

const MainTile = db.define('mainTile', {
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

const SwapTile = db.define('swapTile', {
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

const tileGen = async (type) => {
  try {
    await type.create({
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
    tileGen(MainTile);
  }
};

const swapGen = (numTiles) => {
  for (let i = 0; i < numTiles; i++) {
    tileGen(SwapTile);
  }
};

const seed = async () => {
  try {
    await db.sync({ force: true });
    gridGen(64);
    swapGen(16);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db, MainTile, SwapTile, seed, gridGen };
