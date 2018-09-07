const businessNames = require('./businessNames');

const generateRandomInt = (max, min = 0) => {
  return min + Math.floor(Math.random() * Math.floor(max - min));
};

const generateRandomBoolean = () => {
  return Math.floor(0.5 + Math.random()) > 0;
};

const data = [];

generateRandomInt(4);
generateRandomInt(101, 50);
generateRandomBoolean();
generateRandomBoolean();
generateRandomBoolean();

modules.exports = data;