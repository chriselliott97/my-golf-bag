import mongoose from 'mongoose'

const Schema = mongoose.Schema

const woodSchema = new Schema({
  brand: { type: String, required: true },
  price: { type: Number, min: 0 },
}, {
  timestamps: true
})

const Wood = mongoose.model('Wood', woodSchema)

export {
  Wood
}