const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const businessNames = require('./BusinessNames');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('SUCCESS'));

const restaurantSchema = new mongoose.Schema({

});

const Restaurant = mongoose.model('Restauant', restaurantSchema);

const userSchema = new mongoose.Schema({
  
});

const User = mongoose.model('User', userSchema);