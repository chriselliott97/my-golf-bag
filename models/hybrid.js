import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hybridSchema = new Schema({
  brand: { type: String, required: true },
  price: { type: Number, min: 0 },
}, {
  timestamps: true
})

const Hybrid = mongoose.model('Hybrid', hybridSchema)

export {
  Hybrid
}