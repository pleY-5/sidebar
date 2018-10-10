const fs = require('fs');
const stringify = require('csv-stringify');

const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));

const generateRandomBoolean = (max = 2) => Math.floor(Math.random() * Math.floor(max));

const generateMillionNames = (letter) => {
  const allPossibilities = [];

  const open = ['7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am'];
  const midDayClose = ['1:30 pm', '2:00 pm', '2:30 pm'];
  const close = ['10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm'];

  for (let i = 0; i < 1000000; i++) {
    let weekday;
    let weekend;
    if (generateRandomBoolean()) {
      weekday = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
    } else {
      weekday = `${open[generateRandomInt(open.length)]} - ${midDayClose[generateRandomInt(midDayClose.length)]}`;
    }
    if (generateRandomBoolean()) {
      weekend = weekday;
    } else {
      weekend = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
    }

    allPossibilities.push({
      // id: i + 1,
      name: `TuLan${i}${letter}`.split(' ').join(''),
      priceRange: generateRandomInt(4),
      healthScore: generateRandomInt(101, 50),
      takesReservation: generateRandomBoolean(),
      Monday: weekday,
      Tuesday: weekday,
      Wednesday: weekday,
      Thursday: weekday,
      Friday: weekday,
      Saturday: weekend,
      Sunday: weekend,
    });
  }
  return allPossibilities;
};

let t0;
let t1;
let t2;

const genTenMillionEntries = (num = 0) => {
  const letters = 'abcdefghij'.split('');
  if (num === 0) {
    t0 = Date.now();
    stringify(generateMillionNames(letters[num]), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile('tenmillionRecords.csv', data, (err) => {
          if (err) {
            console.log(err);
          }
        });
        genTenMillionEntries(num += 1);
      }
    });
  } else if (num === 10) {
    t1 = Date.now();
    console.log(`Time finished: ${t1 - t0} milliseconds`);
  } else {
    t2 = Date.now();
    console.log(`${num} million records at ${t2 - t0} milliseconds`);
    stringify(generateMillionNames(letters[num]), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fs.appendFile('tenMillionRecords.csv', data, (err) => {
          if (err) {
            console.log(err);
          }
        });
        genTenMillionEntries(num += 1);
      }
    });
  }
};

genTenMillionEntries();
