const mongoose = require('./connection.js')


const BarberSchema = new mongoose.Schema({
 name: String,
 email: String,
 experience: Number,
 bio: String,
 image: String
})


const BarberCollection = mongoose.model('Barber', BarberSchema)


function getAllBarbers() {
  return BarberCollection.find()
}

function getBarber(barberId) {
    return BarberCollection.findById(barberId)
}

function addNewBarber(barberObject) {
    return BarberCollection.create(barberObject)
}

function updateBarber(barberId, updateBarber) {
    return BarberCollection.findByIdAndUpdate(barberId, updateBarber)
}

function deleteBarber(barberId) {
    return BarberCollection.findByIdAndDelete(barberId)
}


module.exports = {
  getAllBarbers,
  getBarber,
  addNewBarber,
  updateBarber,
  deleteBarber
}
