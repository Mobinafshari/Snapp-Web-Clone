import { create } from 'zustand';

export type RideForType = 'self' | 'others';
type LocationState = {
  location: string;
  setLocation: (loc: string) => void;
  rideFor: RideForType;
  toggleRideFor: (selected: RideForType) => void;
};

export const useLocationStore = create<LocationState>((set, _) => ({
  location: '',
  rideFor: 'self',
  toggleRideFor(selected: RideForType) {
    set(() => ({ rideFor: selected }));
  },
  setLocation(loc) {
    set(() => ({
      location: loc,
    }));
  },
}));
