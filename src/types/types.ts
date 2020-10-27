export type VehicleType = 'hatchback' | 'cedan' | 'suv';
export type SlotType = 'regular' | 'reserved';
export type UserType = 'general' | 'special';
export const UserTypeToSlotTypeMap = {
  general: 'regular',
  special: 'reserved',
};
