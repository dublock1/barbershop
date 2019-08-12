const mongoose = require('./connection.js')


const BarbershopSchema = new mongoose.Schema({
 name: String,
 address: String,
 currentBarbers: String
})


const BarbershopCollection = mongoose.model('Barbershop', BarbershopSchema)


function getAllBarbershops() {
  return BarbershopCollection.find()
}

function getBarbershop(barbershopId) {
    return BarbershopCollection.findById(barbershopId)
}

function addNewBarbershop(shopObject) {
    return BarbershopCollection.create(shopObject)
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
