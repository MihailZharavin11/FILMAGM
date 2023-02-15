const { getPopular } = require("../modules/movies");

async function movies(parent, args, context) {
  const data = await getPopular();
  return data;
}

module.exports = {
  movies,
};
