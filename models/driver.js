import mongoose from 'mongoose'

const Schema = mongoose.Schema

const driverSchema = new Schema({
  brand: { type: String, required: true },
  price: { type: Number, min: 0 },
}, {
  timestamps: true
})

const Driver = mongoose.model('Driver', driverSchema)

export {
  Driver
}