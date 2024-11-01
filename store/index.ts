import { LocationStore, MarkerData } from "@/types/type";
import { create } from "zustand";

export const useLocationsStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  userLatitude: null,
  destinationLongitude: null,
  destinationLatitude: null,
  destinationAddress: null,

  // Function to set user location
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));
  },

  // Function to set destination location
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    }));
  },
}));

export const useDriverStore = create<{
  drivers: MarkerData[];
  selectedDriver: number | null;
  setSelectedDriver: (driverId: number) => void;
  setDrivers: (drivers: MarkerData[]) => void;
  clearSelectedDriver: () => void;
}>((set) => ({
  drivers: [],
  selectedDriver: null,
  setSelectedDriver: (driverId: number) => {
    set(() => ({
      selectedDriver: driverId,
    }));
  },

  setDrivers: (drivers: MarkerData[]) => {
    set(() => ({
      drivers,
    }));
  },
  clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
