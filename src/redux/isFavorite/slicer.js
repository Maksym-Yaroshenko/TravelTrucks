import { createSlice } from "@reduxjs/toolkit";

const isFavoriteSlicer = createSlice({
  name: "isFavorite",
  initialState: {
    items: [],
  },
  reducers: {
    setIsFavorite: (state, action) => {
      const id = Number(action.payload);
      const isFavorite = [...state.items].includes(id);
      //   console.log(isFavorite);
      if (isFavorite) {
        state.items = state.items.filter((elem) => elem !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { setIsFavorite } = isFavoriteSlicer.actions;
export default isFavoriteSlicer.reducer;
