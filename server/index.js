const app = require('./api');
const port = process.env.PORT || 1337;
const { seed } = require('./db');

const init = () => {
  try {
    seed();
    app.listen(port, () => console.log(`glistening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();
