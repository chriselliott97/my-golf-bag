import mongoose from 'mongoose'

const Schema = mongoose.Schema

const clubSchema = new Schema({
  name: String,
  brand: String,
  type: String,
  price: {type: Number, min: 0},
}, {
  timestamps: true
})

const Club = mongoose.model('Club', clubSchema)

export {
  Club
}