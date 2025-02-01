import { create } from 'zustand';

type LocationState = {
  location: string;
  setLocation: (loc: string) => void;
};

export const useLocationStore = create<LocationState>((set, _) => ({
  location: '',
  setLocation(loc) {
    console.log(loc);
    set(() => ({
      location: loc,
    }));
  },
}));
