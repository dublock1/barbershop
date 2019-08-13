const mongoose = require('./connection.js')


const StyleSchema = new mongoose.Schema({
 name: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const StyleCollection = mongoose.model('Style', StyleSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
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
