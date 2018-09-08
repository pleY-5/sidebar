const businessNames = require('./businessNames.js');
const { db, Restaurant } = require('./index.js');

const generateRandomInt = (max, min = 0) => {
  return min + Math.floor(Math.random() * Math.floor(max - min));
};

const generateRandomBoolean = (offset = 0.5) => {
  return Math.floor(offset + Math.random()) > 0;
};

const data = [];

const open = ['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM'];
const midDayClose = ['1:30 PM', '2:00 PM', '2:30 PM'];
const midDayOpen = ['4:00 PM', '4:30 PM', '5:30 PM', '6:00 PM'];
const close = ['10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM'];

for (let i = 0; i < 100; i++) {
  let weekday;
  let weekend;
  let sunday;
  if (generateRandomBoolean()) {
    weekday = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
  } else {
    weekday = `${open[generateRandomInt(open.length)]} - ${midDayClose[generateRandomInt(midDayClose.length)]}, ` +
              `${midDayOpen[generateRandomInt(midDayOpen.length)]} - ${close[generateRandomInt(close.length)]}`;
  }
  if (generateRandomBoolean()) {
    weekend = weekday;
  } else {
    weekend = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
  }
  if (generateRandomBoolean(0.65)) {
    sunday = weekend;
  } else {
    sunday = 'Closed';
  }
  data.push({
    name: businessNames[i],
    priceRange: generateRandomInt(4),
    healthScore: generateRandomInt(101, 50),
    certificate: generateRandomBoolean(),
    reservationForm: generateRandomBoolean(),
    deliveryAndTakeOutForm: generateRandomBoolean(),
    Monday: weekday,
    Tuesday: weekday,
    Wednesday: weekday,
    Thursday: weekday,
    Friday: weekday,
    Saturday: weekend,
    Sunday: sunday
  });
}

db.sync()
  .then(() => Restaurant.bulkCreate(data))
  .catch(err => console.log(err));