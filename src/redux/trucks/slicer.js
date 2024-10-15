import { createSlice } from "@reduxjs/toolkit";
import { getTrucks } from "./operations.js";

export const initialState = {
  // trucks: {
  //   id: null,
  //   name: null,
  //   description: null,
  //   price: null,
  //   location: null,
  //   transmission: null,
  //   form: null,
  //   AC: false,
  //   TV: false,
  //   bathroom: false,
  //   kitchen: false,
  // },
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

        console.log(action.payload.items);
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
