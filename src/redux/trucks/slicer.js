// src/redux/trucks/slicer.js

import { createSlice } from "@reduxjs/toolkit";
import { getTrucks } from "./operations.js";

export const initialState = {
  total: null,
  items: [],
  error: null,
  isLoading: false,
  filters: {
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
  },
};

const trucksSlicer = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filter, value } = action.payload;
      console.log(filter);
      state.filters[filter] = value;
    },
  },
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

export const { setFilter } = trucksSlicer.actions;
export default trucksSlicer.reducer;
