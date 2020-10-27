import { uuid } from 'uuidv4';
import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema(
  {
    _id: {
      type: String,
      default: function genUUID() {
        return uuid();
      },
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true,
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: 'Slot',
      required: true,
    },
    /* Defaults to True, shows the booking is active
    If there is no ParkingEntry in 30 minutes, then 
    this booking will be automatically cancelled by
    the background workers */
    isActive: Boolean,
    enteredAt: Date,
    exitedAt: Date,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export const Booking = mongoose.model('Booking', bookingSchema);
