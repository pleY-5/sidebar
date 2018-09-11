import React from 'react';

const NumOfPeopleSelect = () => (
  <span className='people-container'>
    <img src='images/people.PNG'/>
    <select defaultValue='two'>
      <option value='one'>1 Person</option>
      <option value='two'>2 People</option>
      <option value='three'>3 People</option>
      <option value='four'>4 People</option>
      <option value='five'>5 People</option>
    </select>
    <img src='images/downarrow.PNG'/>
  </span>
);

export default NumOfPeopleSelect;