// src/redux/filters/slicer.js

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filters: {
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
    location: null,
  },
};

const filtersSlicer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log(action.payload);
      state.filters = action.payload;
    },
  },
});

export const { setFilter } = filtersSlicer.actions;
export default filtersSlicer.reducer;
