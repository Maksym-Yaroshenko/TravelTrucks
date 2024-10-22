// src/redux/trucks/slicer.js

import { createSlice } from "@reduxjs/toolkit";
import { getTrucks } from "./operations.js";

export const initialState = {
  total: null,
  items: [],
  error: null,
  isLoading: false,
};

const trucksSlicer = createSlice({
  name: "trucks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTrucks.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(getTrucks.fulfilled, (state, action) => {
        state.error = false;
        state.isLoading = false;
        state.total = action.payload.total;
        state.items = action.payload.items;
      })
      .addCase(getTrucks.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default trucksSlicer.reducer;
