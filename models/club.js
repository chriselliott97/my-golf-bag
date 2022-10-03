import mongoose from 'mongoose'

const Schema = mongoose.Schema

const clubSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true },
  price: {type: Number, min: 0, required: true},
}, {
  timestamps: true
})

const Club = mongoose.model('Club', clubSchema)

export {
  Club
}