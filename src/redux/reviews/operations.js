// src/redux/reviews/operations.js

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (camperId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/${camperId}`);
      return data.reviews;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
