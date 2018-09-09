import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const timeConversion = {
  ':30': 0.5,
  ':00': 0
}

const Reservation = ({ reservationForm }) => {
  // let currDate = new Date();
  // let dateString = `${days[currDate.getDay()]}, ${months[currDate.getMonth()]} ${currDate.getDate()}, ${currDate.getFullYear()}`;
  // let hoursOfOperation = [];
  // if (restaurantData.name !== undefined) { 
  //   let openCloseTimes = restaurantData[days[currDate.getDay()]].split(/ - |, /g);
  //   console.log(openCloseTimes)
  //   for (let i = 0; i < openCloseTimes.length; i += 2) {
  //     let openTime = openCloseTimes[i]
  //     let closeTime = openCloseTimes[i + 1]
  //   }
  // }
  return (
    <div>
      {reservationForm && (
        <label>
          <div className='reservation'>Make a Reservation</div><br/>
          <select>
            <option value='date'></option>
          </select><br/>
          <select>

          </select>
          <select>
            <option value='one'>1 Person</option>
            <option defaultValue='two'>2 People</option>
            <option value='three'>3 People</option>
            <option value='four'>4 People</option>
            <option value='five'>5 People</option>
          </select><br/>
          <input type='submit' value='Find a Table' onClick={e => e.preventDefault()}></input>
        </label>
      )}
    </div>
  );
}

export default Reservation;