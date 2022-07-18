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
  isSwap: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
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
  isSwap: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

const tileGen = async (type) => {
  try {
    await MainTile.create({
      alphanum: randomize(chars),
      color: randomize(colors),
      shape: randomize(shapes),
      isSwap: type,
    });
  } catch (error) {
    console.log(error);
  }
};

const gridGen = (numTiles) => {
  for (let i = 0; i < numTiles; i++) {
    tileGen(false);
  }
};

const swapGen = (numTiles) => {
  for (let i = 0; i < numTiles; i++) {
    tileGen(true);
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
