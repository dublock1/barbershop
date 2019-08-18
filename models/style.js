const mongoose = require('./connection.js')


const StyleSchema = new mongoose.Schema({
 name: String,
 image: String
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


module.exports = {
  getAllStyles,
  getStyle,
  addNewStyle,
  deleteStyle
}
