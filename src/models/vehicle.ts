const findOrCreate = require('mongoose-find-or-create');

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  vehicleType: {
    type: String,
    enum: ['hatchback', 'cedan', 'suv'],
    default: 'hatchback',
  },
  number: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
});
VehicleSchema.plugin(findOrCreate);

export const Vehicle = mongoose.model('Vehicle', VehicleSchema);
