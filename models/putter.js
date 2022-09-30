import mongoose from 'mongoose'

const Schema = mongoose.Schema

const putterSchema = new Schema({
  brand: { type: String, required: true },
  price: { type: Number, min: 0 },
}, {
  timestamps: true
})

const Putter = mongoose.model('Putter', putterSchema)

export {
  Putter
}