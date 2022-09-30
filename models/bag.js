import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bagSchema = new Schema({
  name: String,
  year: Number,
  clubs: [{ type: Schema.Types.ObjectId, ref: "Club" }],
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Bag = mongoose.model('Bag', bagSchema)

export {
  Bag
}