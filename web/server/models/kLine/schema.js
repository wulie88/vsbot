 const mongoose = require('../mongoose')

const Schema = mongoose.Schema;

const KLineSchema = new Schema({
  dataId: {
    type: Number,
    alias: 'did'
  },
  amount: Number,
  count: Number,
  open: Number,
  close: Number,
  low: Number,
  high: Number,
  vol: Number,
  high: Number,
}, {
  timestamps: { ts: 'ts', createAt: 'createAt'}
});

KLineSchema.index({
  did: -1,
}, {unique: true});

module.exports = KLineSchema
