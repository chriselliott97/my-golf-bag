import mongoose from 'mongoose'

const Schema = mongoose.Schema

const clubSchema = new Schema({
  type: String,
  brand: String,
  price: {type: Number, min: 0},
}, {
  timestamps: true
})

const Club = mongoose.model('Club', clubSchema)

export {
  Club
}