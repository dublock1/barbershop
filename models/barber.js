const mongoose = require('./connection.js')


const BarberSchema = new mongoose.Schema({
 name: String,
 email: String,
 experience: Number
})


const BarberCollection = mongoose.model('Barber', BarberSchema)


function getAllBarbers() {
  return 
}


module.exports = {
  getHelloWorldString
}
