const Sequelize = require('sequelize');

const db = new Sequelize('YelpReactorSidebar', 'root', 'nopass', {
  dialect: 'mysql'
});

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  priceRange: Sequelize.INTEGER, // 0-3
  healthScore: Sequelize.INTEGER, // 50-100
  certificate: Sequelize.BOOLEAN,
  reservationForm: Sequelize.BOOLEAN,
  deliveryAndTakeOutForm: Sequelize.BOOLEAN,
  Mon: Sequelize.STRING,
  Tue: Sequelize.STRING,
  Wed: Sequelize.STRING,
  Thu: Sequelize.STRING,
  Fri: Sequelize.STRING,
  Sat: Sequelize.STRING,
  Sun: Sequelize.STRING
  /******* STRETCH GOALS *******/
  // description: Sequelize.STRING, //
  // firstReviewer: Sequelize.INTEGER, // user_id
  // attributes: Sequelize.INTEGER, // attr_id 
  /******* STRETCH GOALS *******/
});

const Reservation = db.define('reservation', {
  restaurantId: Sequelize.INTEGER,
  date: Sequelize.DATE,
  time: Sequelize.STRING, // random from array of times
  numOfPeople: Sequelize.INTEGER,
  remainingSpots: Sequelize.INTEGER // starts at 5
});

module.exports = {
  db: db,
  Restaurant: Restaurant,
  Reservation: Reservation
  /******* STRETCH GOALS *******/
  // User: User,
  // HourOfOperation: HourOfOperation,
  // Attribute: Attribute,
  // Pageview: Pageview,
  // Collection: Collection
  /******* STRETCH GOALS *******/
};

/**********************************
 *
 *  For Stretch Goal ONLY 
 *
const Attribute = db.define('attribute', {
  reservations: Sequelize.BOOLEAN,
  delivery: Sequelize.BOOLEAN,
  takeout: Sequelize.BOOLEAN,
  creditCard: Sequelize.BOOLEAN,
  debitCard: Sequelize.BOOLEAN,
  applePay: Sequelize.BOOLEAN,
  googlePay: Sequelize.BOOLEAN,
  goodForBreakfast: Sequelize.BOOLEAN,
  goodForLunch: Sequelize.BOOLEAN,
  goodForDinner: Sequelize.BOOLEAN,
  valet: Sequelize.BOOLEAN,
  streetParking: Sequelize.BOOLEAN,
  bikeParking: Sequelize.BOOLEAN,
  wheelchairAccessible: Sequelize.BOOLEAN,
  goodForKids: Sequelize.BOOLEAN,
  goodForGroups: Sequelize.BOOLEAN,
  attire: Sequelize.STRING, // [dressy, classy, casual] random
  ambience: Sequelize.STRING, // [classy, 'classy, upscale', casual] random Sequelize.INTEGER
  noiseLevel: Sequelize.STRING, // [quiet, average] random
  alcohol: Sequelize.STRING, // [Beer & wine only, full bar] random
  outdoorSeating: Sequelize.BOOLEAN,
  WiFi: Sequelize.BOOLEAN,
  hasTV: Sequelize.BOOLEAN,
  waiter: Sequelize.BOOLEAN,
  caters: Sequelize.BOOLEAN,
  genderNeutralBathrooms: Sequelize.BOOLEAN
});

const User = db.define('user', {
  name: Sequelize.STRING,
  photo: Sequelize.STRING, // url
});

const Pageview = db.define('view', {
  userId: Sequelize.INTEGER,
  restaurantId: Sequelize.INTEGER
})

const Collection = db.define('collection', {
  userId: Sequelize.INTEGER,
  restaurantId: Sequelize.INTEGER
})
 *
 *  For Stretch Goal ONLY 
 *
 **********************************/