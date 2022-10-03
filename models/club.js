import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  content: { type: String, required: true},
  rating: { type: Number, min: 1, max: 10, required: true}
}, {
  timestamps: true
}) 

const clubSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true },
  price: {type: Number, min: 0, required: true},
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Club = mongoose.model('Club', clubSchema)

export {
  Club
}