import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bagSchema = new Schema({
  name: {type: String, required: true},
  year: {type: Number, min: 0, required: true},
  clubs: [{ type: Schema.Types.ObjectId, ref: "Club" }],
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Bag = mongoose.model('Bag', bagSchema)

export {
  Bag
}