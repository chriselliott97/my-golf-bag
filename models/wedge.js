import mongoose from 'mongoose'

const Schema = mongoose.Schema

const wedgeSchema = new Schema({
  brand: { type: String, required: true },
  price: { type: Number, min: 0 },
}, {
  timestamps: true
})

const Wedge = mongoose.model('Wedge', wedgeSchema)

export {
  Wedge
}