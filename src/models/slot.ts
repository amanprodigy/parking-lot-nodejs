import { uuid } from 'uuidv4';
import mongoose, { Schema } from 'mongoose';

const SlotSchema = new Schema({
  _id: {
    type: String,
    default: function genUUID() {
      return uuid();
    },
  },
  number: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  parkingLot: {
    type: Schema.Types.ObjectId,
    ref: 'ParkingLot',
    required: true,
  },
  slotType: {
    type: String,
    enum: ['regular', 'reserved'],
    default: 'regular',
  },
});

export const Slot = mongoose.model('Slot', SlotSchema);
