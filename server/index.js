const app = require('./api');
const PORT = process.env.PORT || 1337;
const { seed } = require('./db');

const init = () => {
  try {
    seed();
    app.listen(PORT, () => console.log(`glistening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

init();
