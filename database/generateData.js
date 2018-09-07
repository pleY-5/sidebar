const businessNames = require('./businessNames');
const { db, Restaurant } = require('./index.js');

const generateRandomInt = (max, min = 0) => {
  return min + Math.floor(Math.random() * Math.floor(max - min));
};

const generateRandomBoolean = () => {
  return Math.floor(0.5 + Math.random()) > 0;
};

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    name: businessNames[i],
    priceRange: generateRandomInt(4),
    healthScore: generateRandomInt(101, 50),
    certificate: generateRandomBoolean(),
    reservationForm: generateRandomBoolean(),
    deliveryAndTakeOutForm: generateRandomBoolean()
  });
}

db.sync()
  .then(() => Restaurant.bulkCreate(data))
  .catch(err => console.log(err));