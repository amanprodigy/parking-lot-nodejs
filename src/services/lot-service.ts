import { ParkingLot } from '@app/models/parking-lot';
import { SlotType } from '@app/types/types';
import { Slot } from '@app/models/slot';
import { VehicleType } from '@app/types/types';
import { Vehicle } from '@app/models/vehicle';

export class ParkingLotService {
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
}
