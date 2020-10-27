import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      index: true,
      unique: true,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    age: Number,
    userType: {
      type: String,
      enum: ['general', 'special'],
      default: 'general',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export const User = mongoose.model('User', UserSchema);
