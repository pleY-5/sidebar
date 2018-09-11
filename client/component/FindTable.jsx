import React from 'react';

const FindTable = () => (
  <div>
    <input type='submit' value='Find a Table' onClick={e => e.preventDefault()}></input>
  </div>
);

export default FindTable;