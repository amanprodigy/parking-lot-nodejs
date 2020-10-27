import mongoose, { Schema } from 'mongoose';

const parkingLotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    // Total capacity of the lot
    type: Number,
    required: true,
  },
  bookedMinutes: {
    // Till what time slot will stay booked if not parked
    type: Number,
    required: true,
  },
});

export const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);
