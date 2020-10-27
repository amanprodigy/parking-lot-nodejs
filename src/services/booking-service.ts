import logger from '@app/utils/logger';

import { Booking } from '@app/models/booking';
import { ParkingLot } from '@app/models/parking-lot';
import { SlotType } from '@app/types/types';
import { Slot } from '@app/models/slot';
import { VehicleType } from '@app/types/types';
import { Vehicle } from '@app/models/vehicle';
import { User } from '@app/models/user';

export class BookingService {
  addSlot(parkingLotId: Number, slotType: SlotType, slotNumber: String) {
    const newSlot = new Slot({
      parkingLot: ParkingLot.findById(parkingLotId),
      slotType,
      slotNumber,
    });
    newSlot.save();
  }

  addVehicle(number: String, vehicleType: VehicleType) {
    const newVehicle = new Vehicle({ number, vehicleType });
    newVehicle.save();
  }

  assignSlot(parkingLotId: Number, vehicleNumber: Number, userId: String) {
    try {
      const user = await User.findById(userId).exec();
      const vehicle = await Vehicle.findOrCreate({
        number: vehicleNumber,
      }).exec();
      const slotType =
        user && user.userType === 'special' ? 'reserved' : 'regular';
      const bookedSlots = await Booking.find({ isActive: true });
      const bookedSlotIds = bookedSlots.map((bookedSlot) => bookedSlot._id);
      const availableSlots = await Slot.find(
        {
          _id: { $nin: bookedSlotIds },
          slotType,
        },
        (err, result) => {
          return result;
        }
      );
      const slot = availableSlots[0];
      const newBooking = new Booking({
        user,
        vehicle,
        slot,
      });
      const bookingId = newBooking.save();
      return bookingId;
    } catch (err) {
      logger.debug('Error while assigning slot');
      throw new Error('Error while assigning slot');
    }
  }
}
