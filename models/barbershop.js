const mongoose = require('./connection.js')


const BarbershopSchema = new mongoose.Schema({
 name: String,
 address: String,
 currentBarbers: String,
 image: String
})


const BarbershopCollection = mongoose.model('Barbershop', BarbershopSchema)


function getAllBarbershops() {
  return BarbershopCollection.find()
}

function getBarbershop(barbershopId) {
    return BarbershopCollection.findById(barbershopId)
}

function addNewBarbershop(barbershopObject) {
    return BarbershopCollection.create(barbershopObject)
}

function deleteBarbershop(barbershopId) {
    return BarbershopCollection.findByIdAndDelete(barbershopId)
}


module.exports = {
  getAllBarbershops,
  getBarbershop,
  addNewBarbershop,
  deleteBarbershop
}
