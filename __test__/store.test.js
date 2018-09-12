import store from '../client/store';

describe('Store', () => {
  
  test('should have a state with a currentDate field', () => {
    expect(store.getState().selectedDate).toBeDefined();
  }); 
  test('should have a state with a timeslots field', () => {
    expect(store.getState().timeslots).toBeDefined();
  }); 
  test('should have a state with a hasReservation field', () => {
    expect(store.getState().hasReservation).toBeDefined();
  }); 

});