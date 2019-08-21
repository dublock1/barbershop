const mongoose = require('./connection.js')


const StyleSchema = new mongoose.Schema({
 name: String,
 image: String,
 barberId: mongoose.Types.ObjectId
})


const StyleCollection = mongoose.model('Style', StyleSchema)


function getAllStyles() {
  return StyleCollection.find()
}

function getStyle(styleId) {
    return StyleCollection.findById(styleId)
}

function addNewStyle(styleObject) {
    return StyleCollection.create(styleObject)
}

function deleteStyle(styleId) {
    return StyleCollection.findByIdAndDelete(styleId)
}

function getStyleByBarberId(barberId) {
  return StyleCollection.find({barberId: barberId})
}


module.exports = {
  getAllStyles,
  getStyle,
  addNewStyle,
  deleteStyle,
  getStyleByBarberId
}
