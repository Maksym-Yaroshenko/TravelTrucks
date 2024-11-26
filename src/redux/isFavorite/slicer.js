import { createSlice } from "@reduxjs/toolkit";

const isFavoriteSlicer = createSlice({
  name: "isFavorite",
  initialState: {
    items: [],
    selectFavorite: false,
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
    toggleFavorites: (state, action) => {
      state.selectFavorite = action.payload;
    },
  },
});

export const { setIsFavorite, toggleFavorites } = isFavoriteSlicer.actions;
export default isFavoriteSlicer.reducer;
