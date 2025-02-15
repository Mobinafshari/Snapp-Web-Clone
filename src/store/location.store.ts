import { create } from 'zustand';

export type RideForType = 'self' | 'others';
type LocationState = {
  location: string;
  setLocation: (loc: string) => void;
  rideFor: RideForType;
  toggleRideFor: (selected: RideForType) => void;
  start: {
    lat: number;
    lng: number;
  };
  target: {
    lat: number;
    lng: number;
  };
  setStart: (lat: number, lng: number) => void;
  setTarget: (lat: number, lng: number) => void;
  position: { lat: number; lng: number };
  changePosition: (lat: number, lng: number) => void;
};

export const useLocationStore = create<LocationState>((set, _) => ({
  location: '',
  rideFor: 'self',
  start: { lat: 0, lng: 0 },
  target: { lat: 0, lng: 0 },
  position: { lat: 0, lng: 0 },
  setStart(lat, lng) {
    set(() => ({
      start: { lat, lng },
    }));
  },
  setTarget(lat, lng) {
    set(() => ({
      target: { lat, lng },
    }));
  },
  changePosition(lat, lng) {
    set(() => ({
      position: { lat, lng },
    }));
  },
  toggleRideFor(selected: RideForType) {
    set(() => ({ rideFor: selected }));
  },
  setLocation(loc) {
    set(() => ({
      location: loc,
    }));
  },
}));
