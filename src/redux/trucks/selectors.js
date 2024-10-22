// src/redux/trucks/selectors.js

export const selectTrucks = (state) => state.trucks.items;
export const selectIsLoading = (state) => state.trucks.isLoading;
export const selectError = (state) => state.trucks.error;

