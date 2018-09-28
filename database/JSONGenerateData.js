const fs = require('fs');
// const path = require('path');
// const stringify = require('csv-stringify');
// const parse = require('csv-parse');


const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));

const generateRandomBoolean = (offset = 0.5) => Math.floor(offset + Math.random()) > 0;

const generateMillionNames = (letter) => {
  const allPossibilities = [];

  const open = ['7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am'];
  const midDayClose = ['1:30 pm', '2:00 pm', '2:30 pm'];
  const midDayOpen = ['4:00 pm', '4:30 pm', '5:30 pm', '6:00 pm'];
  const close = ['10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm'];

  for (let i = 0; i < 100; i++) {
    let weekday;
    let weekend;
    if (generateRandomBoolean()) {
      weekday = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
    } else {
      weekday = `${open[generateRandomInt(open.length)]} - ${midDayClose[generateRandomInt(midDayClose.length)]},`
                + `${midDayOpen[generateRandomInt(midDayOpen.length)]} - ${close[generateRandomInt(close.length)]}`;
    }
    if (generateRandomBoolean()) {
      weekend = weekday;
    } else {
      weekend = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
    }

    allPossibilities.push({
      name: `TuLan${i}${letter}`.split(' ').join(''),
      priceRange: generateRandomInt(4),
      healthScore: generateRandomInt(101, 50),
      hasCertificate: generateRandomBoolean(0.15),
      takesReservation: generateRandomBoolean(),
      hasTakeout: generateRandomBoolean(),
      hasDelivery: generateRandomBoolean(),
      Monday: weekday,
      Tuesday: weekday,
      Wednesday: weekday,
      Thursday: weekday,
      Friday: weekday,
      Saturday: weekend,
      Sunday: weekend,
    });
    // [(`TuLan${i }${letter}`).split(' ').join('')]);
  }
  return allPossibilities;
};

const genTenMillionEntries = (num = 0) => {
  const letters = 'abcdefghij'.split('');
  if (num === 0) {
    stringify(generateMillionNames(letters[num]), { boolean: true }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile('tenMillionData.json', data, (err) => {
          if (err) {
            console.log(err);
          }
        });
        genTenMillionEntries(num += 1);
      }
    });
  } else if (num === 10) {
    console.log('done');
  } else {
    console.log('num right now', num);
    stringify(generateMillionNames(letters[num]), { boolean: true }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fs.appendFile('tenMillionData.json', data, (err) => {
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
