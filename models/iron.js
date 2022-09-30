import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ironSchema = new Schema({
  brand: { type: String, required: true },
  price: { type: Number, min: 0 },
}, {
  timestamps: true
})

const Iron = mongoose.model('Iron', ironSchema)

export {
  Iron
}