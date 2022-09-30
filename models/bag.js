import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bagSchema = new Schema({
  name: String,
  driver: [{type: Schema.Types.ObjectId, ref: 'Driver'}],
  wood: [{type: Schema.Types.ObjectId, ref: 'Wood'}],
  hybrid: [{type: Schema.Types.ObjectId, ref: 'Hybrid'}],
  iron: [{type: Schema.Types.ObjectId, ref: 'Iron'}],
  wedge: [{type: Schema.Types.ObjectId, ref: 'Wedge'}],
  putter: [{type: Schema.Types.ObjectId, ref: 'Putter'}],
}, {
  timestamps: true
})

const Bag = mongoose.model('Bag', bagSchema)

export {
  Bag
}