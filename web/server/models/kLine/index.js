const KLineSchema = require('./schema'),
mongoose = require('../mongoose')

const Collections = {}
let getModel = (col) => {
  if (!(col in Collections)) {
    Collections[col] = mongoose.model(col, KLineSchema);
  }

  return Collections[col]
}

const findAll = async (col) => {
  let model = getModel(col);
  return await model.find({}).limit(100).sort({did:-1});
}

module.exports = {
  findAll
};
